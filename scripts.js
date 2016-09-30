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
  var consumption = rangeForm.elements["rangeConsumption"].value;

  var factor = consumption / typical;
  var realRange = typicalRange / factor;

  if(getCookie("unit"))
  {
    unit = getCookie("unit");
  }
  else
  {
    unit = "km";
  }

  document.getElementById('rangeDisplay').innerHTML = "You can drive " + realRange.toFixed(0) + " " + unit;
}

function calculateCharge()
{
  var settingsForm = document.forms["settingsForm"];
  var typical = settingsForm.elements["typical"].value;

  var chargeForm = document.forms["chargeForm"];
  var distance = chargeForm.elements["distance"].value;
  var consumption = chargeForm.elements["chargeConsumption"].value;

  var factor = consumption / typical;
  var chargeNeeded = distance * factor;

  if(getCookie("unit"))
  {
    unit = getCookie("unit");
  }
  else
  {
    unit = "km";
  }

  document.getElementById('chargeDisplay').innerHTML = "You need to charge " + chargeNeeded.toFixed(0) + " " + unit + " typical range";
}


// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.
// Start
function getCookie(name)
{
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}

var today = new Date();
var expiry = new Date(today.getTime() + 365 * 24 * 3600 * 1000); // plus 365 days

function setCookie(name, value)
{
  document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}
// End

function setTypical(value)
{
  typical = value;
  document.getElementById("typical").value = typical;
  setCookie("typical", typical);
}

function setUnit(unit)
{
  setCookie("unit", unit);
  changeText(unit);
  //alert(unit);
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

if(getCookie("typical"))
{
  document.forms["settingsForm"].elements["typical"].value = getCookie("typical");
}

function kmToMiles(km)
{
  return km * 1.609344;
}

function changeText(unit)
{
  if(unit == "miles")
  {
    document.getElementById("displayedEnergyConsumption").innerHTML = "320 Wh/mi";
    document.getElementById("typicalConsumption").innerHTML = "300 Wh/mi";
    if(!(getCookie("typical")))
    {
      document.getElementById("typical").value = 300;
    }
    document.getElementById("typical").placeholder = 300;
    document.getElementById("rangeConsumptionLabel").innerHTML = "Average Wh/mi";
    document.getElementById("rangeConsumption").placeholder = "Enter Wh/mi";
    document.getElementById("distance").placeholder = "Miles to go";
    document.getElementById("chargeConsumptionLabel").innerHTML = "Average Wh/mi";
    document.getElementById("chargeConsumption").placeholder = "Enter Wh/mi";
  }
  else if(unit == "km")
  {
    document.getElementById("displayedEnergyConsumption").innerHTML = "200 Wh/km";
    document.getElementById("typicalConsumption").innerHTML = "187 Wh/km";
    if(!(getCookie("typical")))
    {
      document.getElementById("typical").value = 187;
    }
    document.getElementById("typical").placeholder = 187;
    document.getElementById("rangeConsumptionLabel").innerHTML = "Average Wh/km";
    document.getElementById("rangeConsumption").placeholder = "Enter Wh/km";
    document.getElementById("distance").placeholder = "Kilometers to go";
    document.getElementById("chargeConsumptionLabel").innerHTML = "Average Wh/km";
    document.getElementById("chargeConsumption").placeholder = "Enter Wh/km";
  }
}

if(getCookie("unit") == "miles")
{
  document.getElementById("milesRadio").click();
}
else if(getCookie("unit") == "km")
{
  document.getElementById("kilometersRadio").click();
}
else
{
  document.getElementById("kilometersRadio").click();
}

if(urltypicalConsumption = Number(getURLParameter('typical')))
{
  setTypical(urltypicalConsumption);
  setCookie("typical", urltypicalConsumption);
}

if(urlunit = getURLParameter('unit'))
{
  if(urlunit == 'metric' || urlunit == 'km')
  {
    setUnit('km');
  }
  else if (urlunit == 'imperial' || urlunit == 'miles')
  {
    setUnit('miles');
  }
}
