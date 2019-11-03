// create subview, create tables from views and add these to it
var sv;
sv = model.createDesignPartSubView();
sv.setName("Subview Wein");
sv.getPlaceHolder().setVisible(true);

// get all tables
tables = model.getTableSet().toArray();
var t_changed = 0;
for (var t = 0; t < tables.length; t++){
 table = tables[t];	
 table_name  = table.getName(); 
 // set azure color for Hubs
 if (table_name.endsWith('WEIN_H') ){
  table.setUseDefaultColor(false);
  table.setUseDefaultColor(false);	
  table.setBackgroundColor(new java.awt.Color(204,255,255));
  t_changed++
  sv.addViewFor(table);
 }
 // set yellow color for Sattelite
 if (table_name.endsWith('WEIN_H_S') ){
  table.setUseDefaultColor(false);
  table.setUseDefaultColor(false);	
  table.setBackgroundColor(new java.awt.Color(255,255,0));
  t_changed++
  sv.addViewFor(table);
 }
}

// Output in dialog
javax.swing.JOptionPane.showMessageDialog(null, "Anzahl Tabellen im Model: " + tables.length + "\n" + "Anzahl Tabellen im Subview: " + t_changed);