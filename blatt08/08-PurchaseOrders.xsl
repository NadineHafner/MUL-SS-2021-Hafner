<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/PurchaseOrders">
<html>
    <!-- falls ich einmal etwas hinzufügen möchte zB Titel, stylesheet-->
    <head>
        <title>PurchaseOrder</title>
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
    
      

    </head>
    <body>
        
        <h1> Adressen </h1>
        <table id="Table">
            <tr><th>Name</th>
            <th>Street</th>
            <th>City</th>
            
            <th>Country</th>
            <th>Type</th>
            <th>Order Date</th>
        </tr>
        <xsl:for-each select="//Address"> 
    
        <tr>
            <td><xsl:value-of select="Name"/></td>
            <td><xsl:value-of select="Street"/></td>
            <td><xsl:value-of select="City"/></td>
      
            <td><xsl:value-of select="Country"/></td>
            <td><xsl:value-of select="@Type"/></td>
            <td><xsl:value-of select="../@OrderDate"/></td>
    
        </tr>
    
    
    </xsl:for-each>
    
     
    
    
    </table>
 
   
    
        
  
    </body>
   
</html>




</xsl:template>
</xsl:stylesheet>