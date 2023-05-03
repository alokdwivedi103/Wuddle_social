import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AdbSharpIcon from '@mui/icons-material/AdbSharp';
// import FlexBetween from "components/FlexBetween";
// import { Link } from "react-router-dom";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const { palette } = useTheme();
//     const main = palette.neutral.main;
//     const medium = palette.neutral.medium;
    const isNonMobileScreeens = useMediaQuery("(min-width:1000px)")
    return (
        <Box>
            {/* <Box>
                <Link to="https://images.mamaearth.in/catalog/product/v/i/vitamin_c_night_regime_kit_dtoixqzqpwp6vc8a.jpg" target="_blank">
                    <img
                        width="20%"
                        height="auto"
                        alt="advert"
                        src="https://images.mamaearth.in/catalog/product/v/i/vitamin_c_night_regime_kit_dtoixqzqpwp6vc8a.jpg"
                        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
                    />
                </Link>
                <FlexBetween>
                    <Typography color={main}>Mama Earth</Typography>
                    <Typography color={medium}>mamaearth.com</Typography>
                </FlexBetween>
                <Typography color={medium} m="0.5rem 0">
                    Now is the perfect time to start the skin prep. To make your skin look radiant best, here is a complete skincare kit that will make you ready to flaunt a healthy and glowing skin. From traditional Ubtan Face Mask and Face Wash to Aloe Turmeric Gel and our breakthrough Anti-Pollution Face Cream that keeps the harmful effects of pollution away, this kit offers complete care to your skin.
                </Typography>
            </Box> */}
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography
                    fontweight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    Wuddle
                    <AdbSharpIcon sx={{ fontSize: "25px" }} />
                </Typography>
            </Box>
            <Box
                width={isNonMobileScreeens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontweight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to wuddle, the social media for people who can't get cuddles!
                </Typography>
                <Form />

            </Box>

        </Box>
    )
}

export default LoginPage;
