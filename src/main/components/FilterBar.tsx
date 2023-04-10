import { HStack, Select, useStatStyles } from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  orderByOptions: string[];
  platformOptions: string[];
  onPlatformChange: (item: string) => void;
  onOrderChange: (item: string) => void;
}
const FilterBar = ({
  orderByOptions,
  platformOptions,
  onPlatformChange,
  onOrderChange,
}: Props) => {
  return (
    <HStack>
      <Select
        width={200}
        onChange={(event) => onPlatformChange(event.target.value)}
      >
        {platformOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <Select
        width={200}
        onChange={(event) => onOrderChange(event.target.value)}
      >
        {orderByOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default FilterBar;
