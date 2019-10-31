// Transformation Script to change the default color for tables
// after Reverse Engineering

// get all tables in the Relation Model
tables = model.getTableSet().toArray();
var t_changed = 0;
for (var t = 0; t < tables.length; t++){
 table = tables[t];	
 table_name  = table.getName(); 
 // set green color for Hubs
 if (table_name.endsWith('_H')){
  table.setUseDefaultColor(false);	
  table.setBackgroundColor(new java.awt.Color(0,255,0));  
  // make sure the diagram has been changed
  table.setDirty(true);
  t_changed++
 }
 // set red color for Links
 if (table_name.endsWith('_L')){
  table.setUseDefaultColor(false);  
  table.setBackgroundColor(new java.awt.Color(255,204,204));
  // make sure the diagram has been changed
  table.setDirty(true);
  t_changed++
 }
 // set yellow color for Sattelite
 if (table_name.endsWith('_S')){
  table.setUseDefaultColor(false);
  table.setBackgroundColor(new java.awt.Color(255,255,0));
  // make sure the diagram has been changed
  table.setDirty(true);
  t_changed++
 } 
 
}

// Output in dialog
javax.swing.JOptionPane.showMessageDialog(null, "Anzahl Tabellen im Modell: " + tables.length + "\n" + "Anzahl transformierten Tabellen: " + t_changed);