import { useEffect, useState } from 'react';
import { ReactComponent as IconPhoto } from '@assets/icon/icon_photo.svg';
import { ReactComponent as IconLink } from '@assets/icon/icon_link.svg';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';
import { ModalLinkSetting } from '@organism/Modal/ModalLinkSetting';
import { commonModalToggle } from '@store/slice/sliceModalToggle';
import { Link } from 'react-router-dom';
import fallback_image from '@assets/fallback-image.png';
import type { ImageBoxProps } from 'types';

export const ImageBox = ({
  boxIndex,
  blockIndex,
  childrenBlockIndex,
  isCircle,
}: ImageBoxProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname.startsWith('/edit/')) {
      setEditMode(true);
    }
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  const loadedpageData = useSelector((state: RootState) => state.editPage);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [inputId, setInputId] = useState<string>('');
  const [imageId, setImageId] = useState<string>('');
  const [isExternal, setIsExternal] = useState<boolean>(false);
  const commonModalState = useSelector(
    (state: RootState) => state.modalToggle.commonModalState
  );
  useEffect(() => {
    const uniqueId = uuidv4();
    setInputId(() => uniqueId);
    setImageId(() => uniqueId);
  }, []);

  useEffect(() => {
    if (loadedpageData.page[blockIndex].src[boxIndex]?.imageId) {
      //기본구조
      const getImage = localStorage.getItem(
        loadedpageData.page[blockIndex].src[boxIndex].imageId
      );
      if (getImage) {
        setSelectedImage(() => getImage);
      }
      const link = loadedpageData.page[blockIndex].link[boxIndex]?.link;
      if (link?.startsWith('http://') || link?.startsWith('https://')) {
        setIsExternal(() => true);
      }
    } else if (
      //중첩 레이아웃구조
      childrenBlockIndex !== undefined &&
      loadedpageData.page[blockIndex].children[childrenBlockIndex]?.src[
        boxIndex
      ]?.imageId
    ) {
      const getImage = localStorage.getItem(
        loadedpageData.page[blockIndex].children[childrenBlockIndex]?.src[
          boxIndex
        ]?.imageId
      );
      if (getImage) {
        setSelectedImage(() => getImage);
      }
      const link =
        loadedpageData.page[blockIndex].children[childrenBlockIndex]?.link[
          boxIndex
        ]?.link;
      if (link?.startsWith('http://') || link?.startsWith('https://')) {
        setIsExternal(() => true);
      }
    }
  }, [loadedpageData]);

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result);
          localStorage.setItem(imageId, reader.result);
          dispatch(
            updateSrc({
              index: blockIndex,
              childrenBlockIndex: childrenBlockIndex,
              src: {
                // imageSrc: reader.result,
                imageId: imageId,
                srcIndex: boxIndex,
              },
            })
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDefaultImage = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = fallback_image;
  };

  return (
    <div
      className={`h-full w-full ${
        editMode ? 'group' : 'group-disabled'
      } mx-auto flex justify-center items-center`}
    >
      <input
        id={inputId}
        className="hidden"
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={addImage}
      />
      <div className="z-10 hidden space-x-2 group-hover:flex group-hover:absolute">
        <label
          htmlFor={inputId}
          className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded cursor-pointer"
        >
          <IconPhoto />
        </label>

        <span className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded cursor-pointer">
          <IconLink
            onClick={() => {
              dispatch(
                commonModalToggle({
                  blockIndex: blockIndex,
                  childrenBlockIndex: childrenBlockIndex,
                  boxIndex: boxIndex,
                })
              );
            }}
          />
        </span>
        {commonModalState &&
          ((commonModalState.childrenBlockIndex !== undefined &&
            commonModalState.blockIndex === blockIndex &&
            commonModalState.childrenBlockIndex === childrenBlockIndex &&
            commonModalState.boxIndex === boxIndex) ||
            (commonModalState.childrenBlockIndex == undefined &&
              commonModalState.blockIndex === blockIndex &&
              commonModalState.boxIndex === boxIndex)) && (
            <ModalLinkSetting
              boxIndex={commonModalState.boxIndex}
              blockIndex={commonModalState.blockIndex}
              childrenBlockIndex={commonModalState.childrenBlockIndex}
            />
          )}
      </div>
      <div className="w-full h-full group-hover:brightness-50">
        {editMode && (
          <img
            className={`object-cover w-full h-full ${
              isCircle ? 'rounded-full' : ''
            }`}
            src={selectedImage}
            alt="placeholder"
            onError={handleDefaultImage}
          />
        )}
        {!editMode && isExternal && (
          <a
            href={loadedpageData.page[blockIndex].link[boxIndex]?.link}
            target="_blank"
          >
            <img
              className={`object-cover w-full h-full ${
                isCircle ? 'rounded-full' : ''
              }`}
              src={selectedImage}
              alt="placeholder"
              onError={handleDefaultImage}
            />
          </a>
        )}
        {!editMode && !isExternal && (
          <Link to={loadedpageData.page[blockIndex].link[boxIndex]?.link}>
            <img
              className={`object-cover w-full h-full ${
                isCircle ? 'rounded-full' : ''
              }`}
              src={selectedImage}
              alt="placeholder"
              onError={handleDefaultImage}
            />
          </Link>
        )}
      </div>
    </div>
  );
};
