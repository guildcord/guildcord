export function isURL(url: string) {

    if (!url) {
        return false;
    };

    var regex = new RegExp("^(https?:\\/\\/)?"+"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"+"((\\d{1,3}\\.){3}\\d{1,3}))|"+"localhost"+"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+"(\\?[;&a-z\\d%_.~+=-]*)?"+"(\\#[-a-z\\d_]*)?$","i");

    return regex.test(url);
    
};