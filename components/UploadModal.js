import { useRecoilState } from 'recoil'
import {modalState} from '../atom/modalAtom'

export default function UploadModal() {
    const [open , setOpen]   = useRecoilState(modalState)

  return (
    <div>
        <div>UploadModal</div>
        {open && <h1>Modal is open</h1>}
    </div>
  )
}
