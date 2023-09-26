const nodemailer = require("nodemailer")


const sendEmailSuscripcion = async (user) => {
    try {
        const config = {
            host: `smtp.gmail.com`,
            port: 587,
            auth: {
                user: `museoxulsolarr@gmail.com`,
                pass: "pzlk ycnj lvoe okdi"
            },
        }
        const mensaje = {
            from: `museoxulsolarr@gmail.com`,
            to: user,
            subject: `Informacion de suscripcion de pago`,
            html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Security-Policy" content="script-src &#39;none&#39;; connect-src &#39;none&#39;; object-src &#39;none&#39;; form-action &#39;none&#39;;">
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-ction">
            <title></title>
            <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
            <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        </head>
        
        <body>
            <div class="es-wrapper-color">
                <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
        <![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings" valign="top">
                                <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-header-body" width="540" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="500" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://ssvuvq.stripocdn.email/content/guids/CABINET_a4c8b4ed97aaff6bb1de996d69394f17cbd55b421f1be3cfd243767d53e62450/images/museologo.png" alt="" style="display: block;" width="470"></a> </td>
                                                                                        </tr><tr>
                    <td align="center" class="esd-block-text">
                        <p>Hemos recibido tu pago</p><p>Muchas gracias por tu suscripcion.</p>            </td>
                </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-content-body" width="540" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="500" valign="top" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-button">
                                                                                                <!--[if mso]><a href="https://client-xul-solar.vercel.app/" target="_blank" hidden>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://client-xul-solar.vercel.app/"
                        style="height:24px; v-text-anchor:middle; width:299px" arcsize="50%" strokecolor="#2cb543" strokeweight="2px" fillcolor="#ee8d2c">
        <w:anchorlock></w:anchorlock>
        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:8px; font-weight:400; line-height:8px;  mso-text-raise:1px'>Ingresa a tu perfil aqui</center>
        </v:roundrect></a>
        <![endif]-->
                                                                                                <!--[if !mso]><!-- --><span class="es-button-border" style="background: #ee8d2c; border-radius: 50px;"><a href="https://client-xul-solar.vercel.app/" class="es-button es-button-1695348666153" target="_blank" style="background: #ee8d2c; border-radius: 50px; padding: 0px 50px; mso-border-alt: 10px solid #ee8d2c">Ingresa a tu perfil aqui</a></span>
                                                                                                <!--<![endif]-->
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-footer-body" width="540" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="500" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://ssvuvq.stripocdn.email/content/guids/CABINET_a4c8b4ed97aaff6bb1de996d69394f17cbd55b421f1be3cfd243767d53e62450/images/03.png" alt="" style="display: block;" width="285"></a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-social" style="font-size:0">
                                                                                                <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td align="center" valign="top" class="es-p10r"> <a target="_blank" href="https://www.facebook.com/MuseoXulSolar/"><img src="https://ssvuvq.stripocdn.email/content/assets/img/social-icons/logo-colored/facebook-logo-colored.png" alt="Fb" title="Facebook" width="32"></a> </td>
                                                                                                            <td align="center" valign="top" class="es-p10r"> <a target="_blank" href="https://www.instagram.com/museo.xul.solar/"><img src="https://ssvuvq.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png" alt="Ig" title="Instagram" width="32"></a> </td>
                                                                                                            <td align="center" valign="top"><a target="_blank" href="https://twitter.com/xul_solar"><img src="https://ssvuvq.stripocdn.email/content/guids/CABINET_a4c8b4ed97aaff6bb1de996d69394f17cbd55b421f1be3cfd243767d53e62450/images/pngwingcom.png" alt="" title="Custom" width="32"></a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text">
                                                                                                <p>Fundación Pan Klub - Museo
                                                                                                    Xul Solar</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        
        
        
        </body></html>`
        }
        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje)
        console.log("Correo enviado:", info.response)
    } catch (error) {
        console.error("Error al enviar el correo:", error);
    }
}

module.exports = {
    sendEmailSuscripcion
}