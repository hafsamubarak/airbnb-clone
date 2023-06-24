'use client'
import Container from "../Container"
import { TbBeach, TbBuildingSkyscraper, TbMountain, TbPool } from "react-icons/tb"
import { GiBoatFishing, GiCastle, GiCaveEntrance, GiDesert, GiForestCamp, GiIsland, GiMountains, GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import { FaSkiing } from "react-icons/fa"
import { IoDiamond } from "react-icons/io5"
import { BsSnow } from "react-icons/bs"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: "This property is close to the beach"
    },
    {
        label: 'Windmils',
        icon: GiWindmill,
        description: "This property is close to the windmill"
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: "This property is close to the windmills"
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: "This property is close to the Countryside"
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: "This property has a Pool"
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: "This property is nearby to island"
    },
    {
        label: 'Luxury',
        icon: IoDiamond,
        description: "This property is Luxurious"
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: "This property is close to a Lake"
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: "This property has Skiing activities"
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: "This property is a Castle"
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: "This property has Camping Facility"
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: "This property is in the Snowfall area"
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: "This property is in a Cave"
    },
    {
        label: 'Desert',
        icon: GiDesert,
        description: "This property has Desert Adventures"
    },
    {
        label: 'Skyscraper',
        icon: TbBuildingSkyscraper,
        description: "This property has Desert Adventures"
    }
]


const Categories = () => {
  const params = useSearchParams();

  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
        <div className="pt-4 flex flex-row justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
            />
          ))}
        </div>
    </Container>
  )
}

export default Categories