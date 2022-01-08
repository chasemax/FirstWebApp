$("#send_button").click(function () {
    from = $("#text_from").val();
    subject = $("#text_subject").val();
    message = $("#text_message").val();
    final_message = from + " says this: " + subject + " \n" + message;
    alert(final_message);
    $("#g_pic").fadeOut("slow");
});