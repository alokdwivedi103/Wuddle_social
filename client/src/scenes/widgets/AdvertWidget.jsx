import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Link } from "react-router-dom";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
            </FlexBetween>
            <Link to="https://images.mamaearth.in/catalog/product/v/i/vitamin_c_night_regime_kit_dtoixqzqpwp6vc8a.jpg" target="_blank">
                <img
                    width="100%"
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
            <Link to="https://images-cdn.ubuy.co.in/633feb344b564267c63c81e1-dove-hair-and-skin-care-regimen-pack-for.jpg" target="_blank">
                <img
                    width="100%"
                    height="auto"
                    alt="advert"
                    src="https://images-cdn.ubuy.co.in/633feb344b564267c63c81e1-dove-hair-and-skin-care-regimen-pack-for.jpg"
                    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
                />
            </Link>
            <FlexBetween>
                <Typography color={main}>Dove</Typography>
                <Typography color={medium}>dove.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your deep moisture hair and skin care regimen: Our Dove regimen pack contains four moisturizing hair and skin care products to turn your shower into a smooth heavenly experience
            </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget;