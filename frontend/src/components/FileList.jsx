import React,{
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react'
import "./FileList.scss"
import api from '../api'

const FileList = forwardRef(({ref}) => {

    const [items, setItems]=useState([])

    const load=async()=>{
        const {data}=await api.get('/files',{
            params:{t:Date.now()}
        })

        setItems(data)
    }

    useEffect(()=>{
        load()
    },[])

    useImperativeHandle(ref,()=>({load}))

    return (
        <ul className='file-list'>
            {items.map(it=>(

                <li>
                <h3>샘플 이미지</h3>
                <div className="img-wrap">
                    <img src="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757936555204-G5JnXr-test.png" alt="image" />
                </div>
                <p>설명 샘플 입니다.</p>
                <div className="btn-wrap">

                    <a className='open-btn' href="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757936555204-G5JnXr-test.png">
                        Open</a>
                    <button className='delete-btn'>Delete</button>
                </div>
            </li>
            ))}
        </ul>
    )
})

export default FileList