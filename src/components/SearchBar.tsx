"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CityResult } from "@/types/cityResult";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { debounce, getSearchCityLocation } from "@/lib/utils/commomAPI";
import { useDispatch } from "react-redux";
import {
  fetchWeather,
  setLocation,
  setCoordinates,
} from "@/app/(Home)/weatherSlice";
import { AppDispatch } from "@/app/(Home)/store";

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    console.log(searchWord);

    //  getSearchCityLocation(searchWord);
  }, [searchWord]);

  const handleSubmit = async () => {
    if (searchWord !== null) {
      const res: CityResult = await getSearchCityLocation(searchWord);
      const { latitude, longitude, name, country } = res.results[0];
      // dispatch(
      //    setCoordinates({ latitude, longitude }),
      //   fetchWeather({ latitude, longitude }),
      //   setLocation({ name, country })
      // );
      dispatch(setCoordinates({ latitude, longitude })); //修改預設的座標
      dispatch(fetchWeather({ latitude, longitude })); //修改後呼叫
      dispatch(setLocation({ name, country }));
    }
  };

  const handleInputChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchWord(e.target.value);
    },
    650
  );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Search />
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            {/* <DrawerTitle>Move Goal</DrawerTitle> */}
            <DrawerDescription>
              Search your city for currently weather info
            </DrawerDescription>
          </DrawerHeader>
          <div className=" p-4 pb-0">
            <Input
              startIcon={Search}
              type="text"
              placeholder="city name..."
              onChange={handleInputChange}
            />
          </div>

          <DrawerFooter>
            <Button onClick={handleSubmit}>Search</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
