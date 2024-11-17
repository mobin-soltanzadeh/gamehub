import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface Props {
  arrLength: number;
  currentPage: number;
  onChangePage: (pageNum: number) => void;
}

export default function BottomPagination({ arrLength, currentPage, onChangePage }: Props) {
  let startPageNum = 1;
  let endPageNum = Math.ceil(arrLength/10);
  
  let pageNumbers: any[] = [];  

  if([1, 2, 3].includes(currentPage))
    pageNumbers = [1, 2, 3, 4, 5, "...", endPageNum-4, endPageNum-3, endPageNum-2, endPageNum-1, endPageNum];
  else if([endPageNum-2, endPageNum-1, endPageNum].includes(currentPage))
    pageNumbers = [1, 2, 3, 4, 5, "...", endPageNum-4, endPageNum-3, endPageNum-2, endPageNum-1,endPageNum];
  else if(currentPage > 3)
    pageNumbers = [1, -1, currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, -2, endPageNum];
  

  return <div className="BottomPagination flex justify-center items-center gap-x-3 w-full px-4">
    {
      startPageNum !== endPageNum &&
      <button className={`relative size-6 lg:size-7 xl:size-9 rotate-45 hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => currentPage !== startPageNum && onChangePage(currentPage-1)} >
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}><SlArrowLeft /></span>
      </button>
    }
    {
      endPageNum <= 10 && 
      Array.from({length: endPageNum}, (_, index) => index + 1).map(pageNum => (
      <button key={pageNum} className={`relative size-6 lg:size-7 xl:size-9 rotate-45 ${currentPage === pageNum && "bg-zinc-700 text-orange-500"} hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => onChangePage(pageNum)} >
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}>{pageNum}</span>
      </button>           
      ))
    }
    {
      endPageNum > 10 &&
      pageNumbers.map(pageNum => (
        <button key={pageNum} className={`relative size-6 lg:size-7 xl:size-9 rotate-45 ${currentPage === pageNum && "bg-zinc-700 text-orange-500"} hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => pageNum !== "..." && onChangePage(+pageNum)} >
          <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}>{(pageNum === -1 || pageNum === -2) ? "..." : pageNum}</span>
        </button>
      ))
    }
    {
      startPageNum !== endPageNum &&
      <button className={`relative size-6 lg:size-7 xl:size-9 rotate-45 hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => currentPage !== endPageNum && onChangePage(currentPage+1)} >
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}><SlArrowRight /></span>
      </button>
    }
  </div>;
}
