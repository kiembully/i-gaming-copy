import Image from "next/image";

import { Game } from '@/app/types';

interface PopularGamesProps {
  popular_games: Game[];
}

const PopularGames: React.FC<PopularGamesProps> = ({ popular_games }) => {
  return (
    <div className="populargames flex justify-center relative">
      <div className="absolute left-[76px] text-[36px] top-[-41px] text-[#0A316C] bg-[#FFFFFF] p-2 text-lg rounded-tl-[20px] rounded-tr-[20px] font-semibold italic">
        Popular Games
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
      <div className="w-[90%] h-[300px] grid grid-cols-6 gap-4 py-4 pt-5 px-[100px] bg-[#FFFFFF33] relative border-t-[3px] border-white rounded-bl-[18px] rounded-br-[18px]">
        {popular_games.map((game, index) => (
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
              <p className="text-[#0A316C] font-semibold">{game.name}</p>
              <div className="grid grid-cols-4 px-2 pt-2 flex ">
                <div className="flex items-center col-span-1 text-[12px]">
                  <Image
                    width={300} // Provide an initial width, or adjust accordingly
                    height={300} // Provide an initial height, or adjust accordingly
                    alt="User Icon"
                    src="/assets/images/icon-user-red.png"
                    className="w-auto h-3 w-full"
                  />{" "}
                  149
                </div>
                <div className="col-span-3">
                  <button
                    type="button"
                    className="text-[14px] text-white w-[100px] rounded-full float-right"
                    style={{
                      background: "linear-gradient(to bottom, #FFD935, #DE933E)",
                    }}
                  >
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
