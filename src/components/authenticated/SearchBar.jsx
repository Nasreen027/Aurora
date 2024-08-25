import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
<>
<InputGroup
            height={50}
            width={300}
            backgroundColor={"#e1d6c5"}
            borderRadius={50}
          >
            <Input
              fontSize={20}
              pr="4.5rem"
              placeholder="Search"
              borderRadius={50}
              border={"none"}
              p={25}
              backgroundColor={"#e1d6c5"}
            />
            <InputRightElement width="4.5rem" h="1.75rem">
              <IconButton
                border={"none"}
                backgroundColor={"transparent"}
                icon={<CiSearch fontSize={"30px"} />}
                mt={23}
              />
            </InputRightElement>
          </InputGroup>
</>
  );
}

export default SearchBar;