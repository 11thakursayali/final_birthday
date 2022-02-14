import Data from "./data";

function Name() {
    
    let nameString = [];
    nameString = Object.keys(Data).map(birthDetail => {
        const string = Data[birthDetail].name

        var names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();
        
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();

        }
        console.log(initials);
        return initials;
    });
    console.log(nameString);

}
export default Name;