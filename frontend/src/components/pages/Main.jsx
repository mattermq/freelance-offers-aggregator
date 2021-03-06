import React from 'react';
import Feed from '../Feed';
import ViewOptionsBar from '../ViewOptionsBar';
import SortBlock from '../SortBlock';
import SearchBlock from '../SearchBlock';
import FilterBlock from '../FilterBlock';

function Main() {

  return (
    <>
      <div className="mainText"> Удаленная работа на фрилансе </div>
      <div className="mainTextSmall"> Все самые актуальные заказы </div>
      <div className="wrap_numAndSort">
        <div><ViewOptionsBar /></div>
        <div className="sort"><SortBlock /></div>
      </div>
      <div className="wrap_cardBlock_and_filterBlock">
        <div className="main_cardBlock"> <Feed /> </div>
       {/*  <div className="main_filterBlock_Search">
          <div className="blockIN_main_filterBlock_Search">
          <div className="blockIN_main_filterBlock_Search_Text">Поиск</div>
            <div className="search"> <SearchBlock /> </div>
          </div>
        </div> */}
       {/*  <div className="main_filterBlock_Tags">
          <div className="blockIN_main_filterBlock_Tags">
          <div className="blockIN_main_filterBlock_Tags_Text">Поиск по тегам</div>
            
            <TagsBlock className="filterTags" />
          </div>
        </div> */}
        <div className="main_filterBlock">
          <div className="blockIN_main_filterBlock">
          <div className="blockIN_main_filterBlock_Search">
          <div className="blockIN_main_filterBlock_Search_Text">Поиск</div>
            <div className="search"> <SearchBlock /> </div>
          </div>
          <div className="blockIN_main_filterBlock_filter_Text">Фильтры</div>
            <div className="filter"><FilterBlock /></div>
            
          </div>
        </div>
      </div>
    </>
  )
}


export default Main;

