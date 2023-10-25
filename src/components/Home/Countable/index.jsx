import {Component} from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

class Countable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>
                    <Typography variant="h3" gutterBottom>
                        Count : 0
                    </Typography>
                </div>

                <div>
                    <Button
                        variant="contained"
                        onClick={() => {
                            console.log("Clicked")
                        }}
                    >
                        Increase</Button>
                </div>

            </div>


        )
    }
}

export default Countable;