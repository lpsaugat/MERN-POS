import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ItemsList = ({data}) => {
  
  return (
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <img class="w-full h-[60px] rounded-t-xl border-none" src="../docs/assets/img/500x300/img1.jpg"/>
  <div class="p-4 md:p-5">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      {data}
    </h3>
    <p class="mt-1 text-gray-800 dark:text-gray-400">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
      Last updated 5 mins ago
    </p>
  </div>
</div>
  )
}

export default ItemsList