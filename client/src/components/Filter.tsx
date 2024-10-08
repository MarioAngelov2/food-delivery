import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("list-all");

  return (
    <MaxWidthWrapper>
      <div className="flex-col hidden gap-4 lg:flex">
        <p className="text-xl font-bold ">89 Open Stores</p>
        <div className="flex items-center gap-6 w-[220px] justify-between">
          <Label className="text-lg font-bold" htmlFor="open-now">
            Open now
          </Label>
          <Switch id="open-now" />
        </div>
        <div className="flex items-center gap-6 w-[220px] justify-between">
          <Label className="text-lg font-bold" htmlFor="free-delivery">
            Free delivery
          </Label>
          <Switch id="free-delivery" />
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <RadioGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
            className="flex flex-col gap-6 items"
          >
            <div className="flex items-center gap-4 w-fit">
              <RadioGroupItem
                value="list-all"
                checked={selectedValue === "list-all"}
                id="list-all"
                className="w-5 h-5"
              />
              <Label className="cursor-pointer text-md" htmlFor="list-all">
                List all (124)
              </Label>
            </div>
            <div className="flex items-center gap-4 w-fit">
              <RadioGroupItem
                value="up-to-15"
                checked={selectedValue === "up-to-15"}
                id="up-to-15"
                className="w-5 h-5"
              />
              <Label className="cursor-pointer text-md" htmlFor="up-to-15">
                15,00 BGN or less (43)
              </Label>
            </div>
            <div className="flex items-center gap-4 w-fit">
              <RadioGroupItem
                value="up-to-30"
                checked={selectedValue === "up-to-30"}
                id="up-to-30"
                className="w-5 h-5"
              />
              <Label className="cursor-pointer text-md" htmlFor="up-to-30">
                30,00 BGN or less (73)
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Filter;
