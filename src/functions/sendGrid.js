const sgMail = require("@sendgrid/mail");

require("dotenv").config();

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body);
  const { data, globalFieldList } = payload;
  sgMail.setApiKey(process.env.GATSBY_SENDGRID_API_KEY);

  const htmlFieldList = Object.keys(data).map((k) => {
    const lines = data[k]
      .split(/\r\n|\r|\n/gi)
      .map((ln) =>
        ln
          ? `<p style="font-family:'Open Sans', Arial, sans-serif; font-size:18px; line-height:22px;">${ln}</p>`
          : `</br>`
      )
      .join("");
    return `<tr><td valign="top" style="vertical-align: top; font-family:'Open Sans', Arial, sans-serif; font-size:18px; font-weight:bold; line-height:22px;"><h2 style="font-family:'Open Sans', Arial, sans-serif; font-size:18px; font-weight:bold; line-height:22px;"><span style="font-family:'Open Sans', Arial, sans-serif; font-size:18px; font-weight:bold; line-height:22px;">${globalFieldList[k].label}</span></h2></td><td valign="center" style="vertical-align: center; font-family:'Open Sans', Arial, sans-serif; font-size:18px; line-height:22px; white-space:pre;">${lines}</td></tr>`;
  });

  const htmlBody = `
  <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; } body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; } table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; } img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; } p { display:block;margin:13px 0; }</style><!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">.mj-outlook-group-fix { width:100% !important; }</style><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700); @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {.mj-column-per-100 { width:100% !important; max-width: 100%; }}</style><style type="text/css"></style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;">${htmlFieldList}</table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
  `;

  const textBody = Object.keys(data)
    .map((k) => {
      return `${globalFieldList[k].label}: ${data[k]}`;
    })
    .join("<br><br>");

  const msg = {
    to: "aviy.sch@gmail.com",
    from: "aviy.sch@gmail.com",
    subject: "Contact Form Submission",
    html: htmlBody,
    text: textBody,
  };
  try {
    await sgMail.send(msg);
    // console.log(msg)

    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
