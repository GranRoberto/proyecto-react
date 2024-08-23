import SearchBar from "../context/SearchBar";
import SocialBtn from "../context/SocialBtn";

function Header({ handleSetCity }) {
  return (
    <header>
      <div className="flex justify-between items-center h-[90px]">
        <h1 className="text-3xl font-semibold w-auto">
          <span>Weather</span>
          <span className="text-[#FFF101]">Tek</span>
        </h1>
        <SearchBar
          margin={"mx-5"}
          display={"hidden"}
          sm={"lg:flex"}
          handleSetCity={handleSetCity}
        />
        <div className="flex gap-4">
          <SocialBtn
            social={"github"}
            link={"https://github.com/ReynerMejias"}
          />
          <SocialBtn
            social={"linkedin"}
            link={"https://www.linkedin.com/in/reyner-mej%C3%ADas-36410b264/"}
          />
        </div>
      </div>
      <SearchBar
        display={"flex"}
        sm={"lg:hidden"}
        handleSetCity={handleSetCity}
      />
    </header>
  );
}

export default Header;
