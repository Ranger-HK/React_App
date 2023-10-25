import {Component} from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {styleSheet} from "../Countable/styles";
import {withStyles} from "@mui/styles";

class Countable extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    incrementCount(){
        this.setState({
            count : this.state.count + 1
        })
    }

    decrementCount(){
        this.setState({
            count : this.state.count - 1
        })
    }

    ResetCount(){
        this.setState({
            count : this.state.count = 0
        })
    }



    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>
                    <Typography variant="h4" gutterBottom>
                        Count : {this.state.count}
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => {
                            console.log("Clicked")
                            this.incrementCount()
                        }}

                    >
                        Increase</Button>


                    <Button
                    variant="contained"
                    onClick={() => {
                        console.log("Clicked")
                        this.decrementCount()
                    }}
                    style={{marginLeft:"20px"}}
                >
                    Decrease</Button>

                <Button
                    variant="contained"
                    onClick={() => {
                        console.log("Clicked")
                        this.ResetCount()
                    }}
                    style={{marginLeft:"20px",backgroundColor:"red"}}
                >
                    Reset</Button>

            </div>
        )
    }
}

export default withStyles(styleSheet)(Countable);