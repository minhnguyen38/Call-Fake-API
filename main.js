const callFakeAPI = async (url) => {
    try {
        const rawResponse = await fetch(url);
        const jsonResponse = await rawResponse.json();
        return jsonResponse;
    } catch (error) {
        console.err(error);
    }
    return null;
};

const createNewDataDom = (data) => {
    let tableData = document.createElement("td");
    tableData.innerText = data;
    return tableData;
};

const setDataToTable = async () => {
    const response = await callFakeAPI(
        "https://next.json-generator.com/api/json/get/EJlCCbFrc"
    );
    const tableBodyDoms = document.getElementsByTagName("tbody");
    if (!tableBodyDoms.length || !response) return;
    const tableBody = tableBodyDoms[0];
    response.forEach((element) => {
        const tableRow = document.createElement("tr");
        const { _id, name, company, email, phone } = element;
        const { first, last } = name;
console.log("first", element)
        tableRow.append(createNewDataDom(_id));
        tableRow.append(createNewDataDom(first + " " + last));
        tableRow.append(createNewDataDom(company));
        tableRow.append(createNewDataDom(email));
        tableRow.append(createNewDataDom(phone));

        tableBody.append(tableRow);
    });
};
setDataToTable();