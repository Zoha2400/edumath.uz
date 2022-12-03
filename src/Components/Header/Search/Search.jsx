import {React, useEffect, useState} from 'react'
import '../header.scss'
import LinkSearch from './LinkSearch/LinkSearch';

function Search(props) {

const [arr, setArr] = useState([]);


//forImportArrs

  return (
    <div className='search-wrapper'>

        <div className='search'>
            <input type="text" autocomplete={"off"} placeholder='Поиск...' id='search-input' onChange={() => onChangeInp(setArr, props)}/>
        </div>
        

        <div className='searchResutBlock-wrapper'>
            <div className='searchResultBlock'>
                {arr}
            </div>
        </div>
    </div>
  )
}

function onChangeInp(x, prop){
 
    let inpSearch = document.getElementById('search-input');
    let blockSearch = document.querySelector('.searchResutBlock-wrapper');


    let leng, arrHelp, res = '';


    console.log(inpSearch.value);

    if(inpSearch.value != ''){
        blockSearch.style.display = 'flex'; 
    }else{
        blockSearch.style.display = 'none'; 
    }

    x(prop.forImportArrs[0].map((i) => {
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


export default Search