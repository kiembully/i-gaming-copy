import Image from "next/image";

import { Game } from '@/app/types';

interface PopularGamesProps {
  live_games: Game[];
}

const LiveGames: React.FC<PopularGamesProps> = ({ live_games }) => {
  return (
    <div className="livegames flex justify-center relative">
      <div className="absolute left-[76px] text-[36px] top-[-41px] text-[#0A316C] bg-[#FFFFFF] p-2 text-lg rounded-tl-[20px] rounded-tr-[20px] font-semibold italic flex items-center">
        <span className="bg-red-500 w-[6px] h-[6px] rounded-full inline-block mr-1"></span>{" "}
        Live Games
      </div>
      <div className="polygon-left h-50 absolute top-[40%] left-[7%]">
        <Image
          width={300} // Provide an initial width, or adjust accordingly
          height={300} // Provide an initial height, or adjust accordingly
          alt="Polygon Left"
          src="/assets/images/polygon-left.png"
          className="w-full"
        />
      </div>
      <div className="polygon-right h-50 absolute top-[40%] right-[7%]">
        <Image
          width={300} // Provide an initial width, or adjust accordingly
          height={300} // Provide an initial height, or adjust accordingly
          alt="Polygon Right"
          src="/assets/images/polygon-right.png"
          className="w-full"
        />
      </div>
      <div className="w-[90%] h-[327px] grid grid-cols-5 gap-4 py-4 pt-5 px-[100px] bg-[#FFFFFF33] relative border-t-[3px] border-white rounded-bl-[18px] rounded-br-[18px]">
        {live_games.map((game, index) => (
          <div
            key={index}
            className="card flex flex-col justify-between h-[260px]"
          >
            <div className="top-content">
              <Image
                width={300} // Provide an initial width, or adjust accordingly
                height={300} // Provide an initial height, or adjust accordingly
                alt={game.name}
                src={game.imgsrc}
                className="w-full"
              />
            </div>
            <div
              className="bottom-content bg-[#B0EDFF] h-[100px] border-t-0 border-r-4 border-b-4 border-l-4 border-white"
              style={{
                background: "radial-gradient(circle, #B0EDFF, #85DAFF)",
              }}
            >
              <div className="grid grid-cols-4 px-2 pt-2 flex ">
                <div className="flex items-center col-span-1 text-[12px]">
                  <span className="bg-red-500 w-[6px] h-[6px] rounded-full inline-block mr-1"></span>{" "}
                  <strong className="font-bold text-red-500"> LIVE</strong>
                </div>
                <div className="col-span-3 flex justify-end items-center gap-1">
                  <span>149</span>
                  <Image
                    width={300} // Provide an initial width, or adjust accordingly
                    height={300} // Provide an initial height, or adjust accordingly
                    alt="User Icon"
                    src="/assets/images/icon-user-red.png"
                    className="w-auto h-3 max-w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 px-2 pt-2 flex ">
                <div className="flex items-center col-span-2 text-[12px]">
                  <p className="text-[#0A316C] font-semibold">{game.name}</p>
                </div>
                <div className="col-span-2 flex justify-end items-center gap-1">
                  <strong className="font-semibold text-red-500">
                    01:02:13
                  </strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveGames;
