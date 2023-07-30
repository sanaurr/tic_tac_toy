export default function Field({data, onClicked}){
    return(
        <div style={{
            backgroundColor:"gray",
            flex:"1",
            display:"flex",
            alignItems:"center",
            margin:"5px",
            border:"solid 1px ",
            justifyContent:"center",
            fontWeight:"500",
            fontSize:"3em",
        }} onClick={onClicked} >
            {data}
        </div>
    )
}