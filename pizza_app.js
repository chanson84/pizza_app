$(document).ready(function () {
    $(".nav-link").click(showTab);
    $("input[name=soap]").change(updateButton);
    $("form").submit(placeOrder);
    $("button").click(updateStyles);

    function placeOrder(event) {
        // prevent form from flashing and resetting
        event.preventDefault();}

        $(".nav-link").click(showTab);
        function showTab(event)
        {
            event.preventDefault();
            $(this).tab("show");
        }

        var subtotal = 0;
        var soapNames = "";

        // find all the checked boxes
        var checkedBoxes = $("input[name=soap]:checked");

        // add up their data-price values
        checkedBoxes.each(function () {
            // add each box's data-price value to the subtotal
            subtotal += $(this).data("price");
            soapNames += $(this).val();
            soapNames += "<br>";
            //   var discount = $(this).data("discount");
        });

        var selectedSize = $("input[name=size]:checked");
        var selectedCrust = $("input[name=crust]:checked");
        var selectedMeat = $("input[name=meat]:checked");
        var selectedVeg = $("input[name=veggies]:checked");

        var shippingCost = selectedRadioButton.data("shipping-fee");

        var orderTotal = subtotal + shippingCost;

        // put total onscreen
        $("#pizzaOutput").text(subtotal.toFixed(2));
        $("#shippingOutput").text(shippingCost.toFixed(2));
        $("#totalOutput").text(orderTotal.toFixed(2));
        // Don't output the tags! Render them as breaks
        $("#soaps").html(soapNames);

    function updateButton() {
        var checkedBoxes = $("input[name=soap]:checked");

        var numSelections = checkedBoxes.length;

        $("#quantity").text(numSelections);
    }
});