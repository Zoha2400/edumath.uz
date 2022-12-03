import {React, useEffect, useState} from 'react'
import '../header.scss'
import LinkSearch from './LinkSearch/LinkSearch';

function Search(props) {

const [arr, setArr] = useState([]);

useEffect(() => {
    console.log('rerender');
}, [arr]);

let inpSearch = document.getElementById('search-input');
let blockSearch = document.querySelector('.searchResutBlock-wrapper');


let searchedArray = [], leng, arrHelp, res = '';

function onChangeInp(){
        
        if(inpSearch.value == ''){
            blockSearch.style.display = 'none'; 
        }else{
            blockSearch.style.display = 'flex'; 
        }
        console.log(arr);   

        setArr(props.forImportArrs[0].map((i) => {
        arrHelp = i[0].split(inpSearch.value);
        leng = arrHelp.length;

        res = '';

        for(let j = 0; j < leng; j++){
            res += arrHelp[j];
        }
        if(res.length < i[0].length){
            return(
                <LinkSearch link={i[1]} theme={i[0]} blockSearch={blockSearch} inpSearch={inpSearch}/>
            );
        };
    }));
}

//forImportArrs

  return (
    <div className='search-wrapper'>

        <div className='search'>
            <input type="text" placeholder='Поиск...' id='search-input' onChange={onChangeInp}/>
        </div>
        

        <div className='searchResutBlock-wrapper'>
            <div className='searchResultBlock'>
                {arr}
            </div>
        </div>
    </div>
  )
}

export default Search