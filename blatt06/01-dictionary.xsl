<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/dictionary">
<html>
    <!-- falls ich einmal etwas hinzufügen möchte zB Titel, stylesheet-->
    <head>

    </head>
    <body>
        <style>
            <!-- wiederverwendung der 01-table aufgabe-->
          table, tr,td {
            padding: auto;  
            border: 1px groove black;
            margin-left: auto;
           margin-right: auto;
           width: 30%;
          }  
          tr:nth-child(even) {background: #CCC}
          tr:nth-child(odd) {background: #FFF}
          H1, div { text-align: center }
        </style>
        <h1> Wörterliste </h1>
        
        <table>
            <tr>
                <th> Englisch</th>
                <th>Deutsch</th>
                <th>Kategorie</th>
            </tr>
            <xsl:for-each select="word">
                <xsl:sort select="@value" order="ascending" />
                <tr>
                    <td> <xsl:value-of select="@value"/></td>
                    <td> <xsl:value-of select="translation[@lang='DE']"/></td>
                    <td> <!-- suggested sources and for emoji: https://www.w3schools.com/charsets/ref_emoji.asp-->
                        <xsl:choose>
                        <xsl:when test="category = 'Geography'">(&#127757;)</xsl:when>
                        <xsl:when test="category = 'Animal'"> (&#128018;)</xsl:when>
                        <xsl:when test="category = 'Food'"> (&#127831;)</xsl:when>

                        </xsl:choose>
                        
                        
                        
                        <xsl:value-of select="category"/></td>
                </tr>
            </xsl:for-each>
            
        </table>
        <div id="statistik">
        <h2> Statistik </h2>
            <p> Diese Liste enthält insgesamt <b><xsl:value-of select="count(word)" />  Vokabeln</b> </p>
            <br/>
            <p> Deutsch: <xsl:value-of select="count(word/translation[@lang='DE'])" />   </p>
            <p> Französisch: <xsl:value-of select="count(//translation[@lang='FR'])" />   </p>
            <p> Latein: <xsl:value-of select="count(//translation[@lang='LA'])" />   </p>
        </div>
    </body>
</html>




</xsl:template>
</xsl:stylesheet>