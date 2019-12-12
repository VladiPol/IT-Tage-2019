// Changed the default Template from OSDDM
// 1. Get Template Table and put columns are found by column name
// 2. Allowing reuse of already existing columns
// 3. Dynamic property ctemplateID is set afterwards - will keep connection to template
//    column even if the name of column is changed
var t_name = "TEMPLATE_TABLE";
var p_name = "ctemplateID";
var t_changed = 0;
template = model.getTableSet().getByName(t_name);
if (template != null){
    template_columns = template.getElements();
    tables = model.getTableSet().toArray();
    for (var t = 0; t < tables.length;t++){
     table = tables[t];
    // compare TEMPLATE_TABLE name ignoring the case
     if(!table.getName().equalsIgnoreCase(t_name)){
         for (var i = 0; i < template_columns.length; i++) {
            column = template_columns[i];
            col = table.getElementByName(column.getName());
            if(col == null){
             col = table.getColumnByProperty(p_name, column.getObjectID());
            }
            if(col == null){
             col = table.createColumn();
            }
            column.copy(col);
            //set property after copy otherwise it'll be cleared by copy
            col.setProperty(p_name,column.getObjectID());
            table.setDirty(true);            
         }
      t_changed++;
      }
    }
}

// Output in dialog
javax.swing.JOptionPane.showMessageDialog(null, "Anzahl Tabellen im Modell: " +  (model.getTableSet().toArray().length - 1) + "\n" + "Anzahl transformierten Tabellen: " + t_changed);