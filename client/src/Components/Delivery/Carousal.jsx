import React from "react";
import Slider from "react-slick";

//components
import Category from "./Category";
import { NextArrow } from "../CustomArrows/NextArrow";
import { PrevArrow } from "../CustomArrows/PrevArrow";

const Carousal = () => {
	let settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};

	const categories = [
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png",
			title: "Pizza",
		},
		{
			image:
				"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
			title: "Burger",
		},
		{
			image:
				"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
			title: "Rolls",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png",
			title: "Chaat",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/9ab7b145bc19095dac6b18cf02bb958e.png",
			title: "Momos",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png",
			title: "Cake",
		},
		{
			image:
				"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
			title: "Chicken",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/2/96622ce1309d6ff6047c1965b8a22a5e.png",
			title: "Samosa",
		},
		{
			image:
				"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
			title: "Fries",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/2/d541098e14dd80d1a17a08594aa43460.png",
			title: "Noodles",
		},
		{
			image:
				"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
			title: "Paneer",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/98a5f537c46e6a2bcd1066ec72b9a612.png",
			title: "Soup",
		},
	];

	const brands = [
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png?output-format=webp",
			title: "McDonald's",
		},
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png?output-format=webp",
			title: "La Pino'z Pizza",
		},
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
			title: "Pizza Hut",
		},
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png?output-format=webp",
			title: "Bikanervala",
		},
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807172.png?output-format=webp",
			title: "Domino's Pizza",
		},
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/7d607a40589cca86b4db13542b82a319_1605092761.png?output-format=webp",
			title: "G.D Pethe Wale",
		},
		{
			image:
				"https://b.zmtcdn.com/data/brand_creatives/logos/2205f22bebf36e6a48d46ba89dd04fea_1630656969.png?output-format=webp",
			title: "UBQ by Barbeque Nation",
		},
	];

	return (
		<>
			<div className="relative">
				{/* category carousal */}
				{/* div for background color */}
				<div className="hidden md:block absolute left-0 bg-greyy-100 w-full -z-50 h-64" />
				<h1 className="relative text-xl md:text-3xl text-left font-semibold my-10">
					Inspiration for your first order
				</h1>
				{/* small screen flex category starts */}
				<div className="md:hidden flex flex-wrap my-3 md:my-6 justify-around">
					{categories.map((category) => (
						<Category {...category} />
					))}
				</div>
				{/* small screen flex category end */}
				{/* category carousal */}
				<div className="hidden md:block">
					<Slider {...settings}>
						{categories.map((category) => (
							<Category {...category} />
						))}
					</Slider>
				</div>
				{/* carousal ends */}
			</div>
      <div>
			{/* brand carousal begins */}
			<h1 className="relative text-xl md:text-3xl text-left font-semibold my-10">
				Top brands for you
			</h1>
			{/* small screen */}
			<div className="md:hidden flex flex-wrap my-3 md:my-6 justify-around">
				{brands.map((brand) => (
					<Category {...brand} />
				))}
			</div>
			{/* large screen */}
			<div className="hidden md:block">
				<Slider {...settings}>
					{brands.map((brand) => (
						<Category {...brand} />
					))}
				</Slider>
			</div>
			{/* brand carousal ends */}
      </div>
		</>
	);
};

export default Carousal;
