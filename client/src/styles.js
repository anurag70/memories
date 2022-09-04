import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  AppBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgb(12 15 13)",
  },
  image: {
    marginLeft: "15px",
  },
}));
