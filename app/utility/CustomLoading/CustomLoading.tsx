import {CircularProgress} from "@mui/material";
import style from './CustomLoading.module.scss'
export function CustomLoading() {
    return (
        <div className={style.block}>
            <CircularProgress/>
        </div>
    )
}