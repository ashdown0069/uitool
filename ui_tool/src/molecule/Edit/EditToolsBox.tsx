import { ReactComponent as IconPencil } from '@assets/icon_EditPencil.svg'
import { ReactComponent as IconReset } from '@assets/icon_EditReset.svg'
import { ReactComponent as IconUp } from '@assets/icon_EditUp.svg'
import { ReactComponent as IconDown } from '@assets/icon_EditDown.svg'
import { ReactComponent as IconTrashCan } from '@assets/icon_EditTrashCan.svg'

interface ToolsPropsType {
    block_id: number
}

/** onClick 설정 필요 */
export const EditToolsBox = ({block_id}:ToolsPropsType) => {
    const Write = () => {}
    const Reset = () => {}
    const MoveUp = () => {}
    const MoveDown = () => {}
    const Trash = () => {}

    return (
        <div className='absolute top-[30px] right-[100px] w-[246px] h-[54px] rounded-full bg-grayscale-600 hidden group-hover:flex z-20 justify-evenly pr-4 pl-4'>
            <button onClick={Write}><IconPencil className='fill-white hover:fill-primary-900'/></button>
            <button onClick={Reset}><IconReset className='fill-white hover:fill-primary-900'/></button>
            <button onClick={MoveUp}><IconUp className='fill-white hover:fill-primary-900'/></button>
            <button onClick={MoveDown}><IconDown className='fill-white hover:fill-primary-900'/></button>
            <button onClick={Trash}><IconTrashCan className='fill-white hover:fill-primary-900'/></button>
        </div>
    )
}