/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. It is a work in progress.
*/

class Theme {
    // Get the theme (static method) 
    static getTheme() {
        // Inter-object variables
        let centralTextColor = '#dcd6ce'
    
        return {
            textColor : centralTextColor,
            pagePadding: '0 20px',
            // Navbar styles
            navbar : {
                height: '56px',
                textColor: centralTextColor,
                textColorHighlight: '#6385a9',
                font: '\'Roboto Slab\', sans-serif',
                padding: '0 50px',
                // Navbar border styles
                border: {
                    backgroundColor: super.textColor,
                },
            },
            mobileSizeCutoff : '992px' // Has to be the same as bootstrap's breakpoint
        };
    }
}

export default Theme