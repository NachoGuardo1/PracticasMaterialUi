import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const MuiCard = () => {
  return (
    <Box width="240px">
      <Card>
        <CardMedia
          component="img"
          height="120px"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhYRFRUYHTQkGCYlJxUVLTMtJSkuLy4wGCs/OTMsOiktMi0BCgoKDQ0NFQ0NFS0eFR4yMzcrMTcrLisxKys3LTIuKzc3Ky4tMDU3Ky0rKzctKzcrKysrNysrLystNysrKzQrMv/AABEIAKMBNgMBEQACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQQCBQMGB//EADEQAQACAQICCAMIAwAAAAAAAAABAgMEEQUSEyEiMTJBUWEGgcEVI0JxkaGx8BTR4f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwQCBf/EADARAQACAQIFAQcDBAMAAAAAAAABAgMEERIhMUFR8AUTImFxkcGBodEUFSPxM0Kx/9oADAMBAAIRAxEAPwD+RvSAgAKCAoICgAAAAAAAAAAAAAKAAAAAAAAABsBsBsBsouwGwLyiOUUAAAAAAAAAAAAAAAAAAAAAAABQAAFAAAF2A2A2EXYF2BYgHUVB8EUAAAEBQQAAAFAAAAAUAAAAABUBQAFAAABdgBAF2A2BdgWIB1EA6iFGV5UAAAABQAAAAAAAFAQAFAAUAAAAAFEAAAUAFA2BdgWIB1EA6iFHUQDG8qAAAAACACgAAAKAAoAAAgKCAqgCAAKAAACgAoLsC7AsQCxCjqAdQDE8goAAACgAAKAAAAIACgAKAIAAAoAAAKAACgoAKCwosA6gFgHUAwooAACgAACAAAAAoCgCAAAAKAAAACgAoAAKCgoCigoOgWAdQDCigAgAAAAKCKKACAAAAAPvo9Lkz5K4sdea9vlER5zM+UPVKWvbhr1Z5ctMVJvedoh6P2Be28YtRpc2SvixY8sc8T6R/wB2b/00zyraJnxu5P7hWOeTHatZ7zHL192PT8N1GTJOKuK/PXxxaOWKe9pnu+vkyrhva3DEc3Rk1WGlIyWtHDPT5tn2Bed649RpcuasTM4aZd79XlH9hr/TT0raJt43c39wrG03x2rSe8xyeTMTE7TExMTtMT1TE+jmfQid+cAAAAKACgAoKooAKCgoOoB0DAgAACgKAICggAAAACgAA9fgszXT8QvXxxhx0rMeKIva0Tt+kOnByplmOuzg1m05tPWem8/tEbPjwvg+fNkpHJkxUiYmcs0tSKxHnWZ759NnnFp73tEbTEeXvU63DipM7xafG+/3+T9PqcebU0y6acefDSIiMWoteJ6WaxttkiOvaf7t3PoXi+SJx7TEdp8/V8XHbFgtXPFotPeu3T6fT15flKaXUafLS1sWWk48lZi3JaK7xbyt3S+bFL47RMxMbS+9OXDmx2iLRMTHn8Pr8RUiut1ER3c9Z+c0rM/vMvWpjbNbb1yZ+z5mdLjmfH5mHnMHYoAAKACgAoKoAoKCgsA6gFBgRVAAEAAAAAAUAAAAAG3heg/yL2ibRjxY6zkzZJ7qUj6tcWLjnnO0R1lz6nUe5rG0b2nlEeZe5wbX4ekvp9Ji6LnxX6PNftZcmWsb1mYny8U7fw68GWnFOPFG28de8y+XrNPl4Izai3FtMbxHSI7vlxjXailMOk6W99TflvntW21ue3hxV5e7y7vb1l5z5MkRXFvvbv8Aw00mnw2vfUcMRjjlX6R1md/X2Z9VwriGHHOW2W0xWOa0U1GSb1jzmfy9peL4M9K8U2/eWuLWaPJeMcU5z03rG0vW4XrM+qrp70yzW2LJGPV07M1vj23i+0x1b7bdXrPo6cOS+WKzWecdfo4NTgxae2St67xaN6T4nx6/Lzsuo0muy3pekYMtr2rh1FJ3rk69q88e/V/uGE3xZrTExtPafPjd2Vx6jSY4vWeKkRzr487evu8TUYLYr2x3ja9LTW0d8b+zktWazNZ6w+njyVyUi9ekvm8vagAAoAKCqAKCgoKCwCwCgwoAAAAAKAAAAAAACgA9TgeXH9/p8lujrqsdaVyT3UvWZmu/t1ujBavxY7TtxOHW0v8A481I3mk9PMT1aeFcMy4NXFs9ZpTBTJnm8ddLRWPK3zaYcNqZd7xtEc2Oq1ePLp9sU7zaYjbvz+Tniduj1ODX4458WaaZo38rxtzY59P76JlnhyVz16Tz/ldNHHgvpL8rV3j9O0+vy9TX/E2C2C8Yue2S9JrFbU2ikzG28z3Tt7OjJrKTSYr1lw4PZWaMsTk2isT56+vmy/DmOmDHF80zWdbaMGKsTtM02ntfrO36erPSxFK73/78ob+0bWy3muOP+PnP18evww6Lg2TpLTl+6wYMk9Jmv2YmK2/D677Maae3FvblWOsuvNrqcERj+K9o5RHPr5+jJxXVRn1GXNEbVvaOXfv5YrFY/hnmvx5LXju6NLinDhpjnrH+2Vk3AUAFABVAFBQUAFBYB1ALAMCAACgAAAAAAAoAAAAAPf4FrstNNrJ5ueMNMM48eTtUjebRPV6dXc7dPltGO/PfbbZ8rW6fHbPhjbabTO8xynts+mj4vp822m1GmxY8N7b82O00pXJ5TtHh39Yn6rTUY7/48lYis/8Arxm0WbFvnw5Jm8eec7fn7NNeG6StsvTaO2LHhje2W2oyTS0eXL19rdp7nFEzx02iO+8sZ1Womtfd5uK1ukcMb/r49dmPJ8Q816dHpcNZrMUx2vHPetN+qK93L5Mp1e9o4aR8nRX2bw0tx5ZnfnO3KJn8s/xPnvbV5cc3tamOaclJns13x1mdo+cs9XaZyzWZ5R/Db2ZjpGnpeK7Wnfef1l5LmfQUAAFABVAFBQAUFBQWAUFBgQUAAAAAAAFAAAAABQAbuE62uG94yVm+HNScWWsd/LP4o/L6tsOSKTMWj4Z6uXV4LZaxNJ2vWd4aYwcNp2pz5s8d8Yq45x2n2tafps04dPHObTPy22Y+811/hjHFZ877/t/t9b8cx5onDqMEf43Z6OuKZjJh2jaJifP9nqdTW/wZK/D2+TOPZ98U+8w5P8nffpLnDTh+K9c0Z8ubkmLUw9FNbTaOuOa22yVjT0nj4pnbts9XtrclZx+7iu/Wd9/2eZqs9suS+W3ivabT6R7fJzXtN7Taesu7FjjHSuOvSHyeWgACqAKACgAoKCgAsAoKCgwoAAAAAKAAAAAACgAAAoAAAKAACgKKACgAoKACgoKCgAqjC8gAACgAAAAAAoAAAAKAACgAAoACigAoAKCgAoAKCgoLACjC8gCgAAAAAAoAAAAKAAACgAAoAKoAAoAKACgAoKACgoLAAMSAAAAAACgAAAAoAAAKAAACgAqgACgAoAKACgAoKCgAoKDCgAAAoAAAAAKAAACgAAAAoAKoAAoAKACgAoAKACgoAKCgwoAKAAAAAACgAAAAoAAKAAooAAKACgAoAAKACgoAKCgAoMSAAAAAACgAAAAoAAAKoICioCgCgAAoAKACgAoAKCgAoCioMSAAACgAAAAAAoAAAKAAosAAAoAAKACgAAoAKACgoAKAooP/2Q=="
          alt="Imagen card"
        />

        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolore
            odio reiciendis similique sed. Voluptates dolorem laborum assumenda,
            officia iste labore dignissimos, autem expedita porro quaerat ex
            numquam beatae ipsa.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Action 1</Button>
          <Button size="small">Action 2</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
