import { Bets } from '@/app/types'; 
import React from "react";

interface PopularGamesProps {
  latest_bets: Bets[];
}

const LatestBets: React.FC<PopularGamesProps> = ({ latest_bets }) => {
  return (
    <div className="latest-bets flex justify-center relative">
      <div className="absolute left-[76px] text-[36px] top-[-41px] text-[#0A316C] bg-[#FFFFFF] p-2 text-lg rounded-tl-[20px] rounded-tr-[20px] font-semibold italic">
        Latest Bets
      </div>

      <div className="table w-[90%] h-auto grid grid-cols-5 py-2 pt-2 bg-[#FFFFFF33] relative border-t-[3px] border-white rounded-bl-[18px] rounded-br-[18px]">
        <div className="font-bold border-b-[3px] pb-2 border-white text-center">GAME</div>
        <div className="font-bold border-b-[3px] pb-2 border-white text-center">NICKNAME</div>
        <div className="font-bold border-b-[3px] pb-2 border-white text-center">BET AMOUNT</div>
        <div className="font-bold border-b-[3px] pb-2 border-white text-center">PROFIT</div>
        <div className="font-bold border-b-[3px] pb-2 border-white text-center">ODDS</div>

        {latest_bets.map((game, index) => (
          <React.Fragment key={index}>
            <div className="p-1 font-semibold border-l-[1px] border-[#74BEC8] flex justify-center items-center px-6">
              {game.game}
            </div>
            <div className="p-1 font-semibold border-l-[1px] border-[#74BEC8] flex justify-center items-center px-6">
              {game.nickname}
            </div>
            <div className="p-1 font-semibold border-l-[1px] border-[#74BEC8] flex justify-center items-center px-6">
              <div className="text-[#2AAFF8] w-full bg-white rounded-[19px] h-[35px] flex justify-center items-center">
                {game.betAmount}
              </div>
            </div>
            <div className="p-1 font-semibold border-l-[1px] border-[#74BEC8] flex justify-center items-center px-6">
              <div className="w-full bg-white rounded-[19px] h-[35px] flex justify-center items-center">
                {game.profit}
              </div>
            </div>
            <div className="p-1 font-semibold border-l-[1px] border-[#74BEC8] flex justify-center items-center px-6">
              <div className="text-[#2AAFF8] w-full bg-white rounded-[19px] h-[35px] flex justify-center items-center">
                {game.odds}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LatestBets;
