import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            <Link to={`https://wuddle-social-backend.onrender.com/assets/${image}`} target="_blank">
                <img
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                    width={size}
                    height={size}
                    alt="user"
                    src={`http://localhost:3001/assets/${image}`}
                />
            </Link>
        </Box>
    )
}
export default UserImage;
