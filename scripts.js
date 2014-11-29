function showRange()
{
    document.getElementById('chargeDiv').style.display = "none";
    document.getElementById('rangeDiv').style.display = "block";
    document.getElementById('settingsDiv').style.display = "none";

    document.getElementById('rangeLink').className = "active";
    document.getElementById('chargeLink').className = "";
    document.getElementById('settingsLink').className = "";
}

function showCharge()
{
    document.getElementById('rangeDiv').style.display = "none";
    document.getElementById('chargeDiv').style.display = "block";
    document.getElementById('settingsDiv').style.display = "none";

    document.getElementById('chargeLink').className = "active";
    document.getElementById('rangeLink').className = "";
    document.getElementById('settingsLink').className = "";
}

function showSettings()
{
    document.getElementById('rangeDiv').style.display = "none";
    document.getElementById('chargeDiv').style.display = "none";
    document.getElementById('settingsDiv').style.display = "block";

    document.getElementById('chargeLink').className = "";
    document.getElementById('rangeLink').className = "";
    document.getElementById('settingsLink').className = "active";
}

function calculateRange()
{

    var settingsForm = document.forms["settingsForm"];
    var typical = settingsForm.elements["typical"].value;

    var rangeForm = document.forms["rangeForm"];
    var typicalRange = rangeForm.elements["typicalRange"].value;
    var consumption = rangeForm.elements["consumption"].value;

    var factor = consumption / typical;
    var realRange = typicalRange / factor;

    document.getElementById('rangeDisplay').innerHTML = "You can drive " + realRange.toFixed(0) + " km";
}

function calculateCharge()
{
    var settingsForm = document.forms["settingsForm"];
    var typical = settingsForm.elements["typical"].value;

    var chargeForm = document.forms["chargeForm"];
    var distance = chargeForm.elements["distance"].value;
    var consumption = chargeForm.elements["consumption"].value;

    var factor = consumption / typical;
    var chargeNeeded = distance * factor;

    document.getElementById('chargeDisplay').innerHTML = "You need to charge " + chargeNeeded.toFixed(0) + " km typical range";
}