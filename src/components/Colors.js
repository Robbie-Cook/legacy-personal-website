/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. 

This is to be replaced with React.Context, splitting each logical piece into its own
context e.g. ColorContext, SizeContext etc.
*/
class Colors {
  static textColor = "#dcd6ce"
  static backgroundColor = "#0f0f0f"
  
  // Link color
  static link = {
      color: '#6385a9', // also defined in global-styles.css
      colorActive: '#1565c0',
      colorHighlight: '#6385a9'
  }

  static text = {
      color: '#dcd6ce' // also defined in global-styles.css
  }

  static page = {
    backgroundColor: '#0f0f0f',
    secondaryColor: '#EB6D6D', // reddish
  }
}

export default Colors
