// Transformation Script to change the default color for tables
// after Reverse Engineering

// get all tables in the Relation Model
tables = model.getTableSet().toArray();
for (var t = 0; t < tables.length; t++){
 table = tables[t];	
 // set yellow color for all Tables
 table.setUseDefaultColor(false);
 table.setBackgroundColor(new java.awt.Color(255,255,0));

 // make sure the diagram has been changed
 table.setDirty(true);
}

// Output in dialog
javax.swing.JOptionPane.showMessageDialog(null, "Anzahl transformierten Tabellen: " + tables.length);