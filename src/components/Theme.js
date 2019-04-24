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
            textColor: centralTextColor,
            backgroundColor: '#0f0f0f',
            // page styles
            page: {
                padding: new Dimensions(40, 90, 0, 90),
                item: {
                    padding: new Dimensions(0, 20),
                },
            },
            // Navbar styles
            navbar: {
                height: '56px',
                textColor: centralTextColor,
                textColorHighlight: '#6385a9',
                activeLinkColor: '#1565c0',
                font: '\'Roboto Slab\', sans-serif',
                padding: new Dimensions(0, 90),
                // Navbar border styles
                border: {
                    backgroundColor: super.textColor,
                },
            },
            mobile: {
                colMargin: new Dimensions(0, 20, 20, 20),
                cutOff: '900',
                padding: new Dimensions(20, 20),
                navbar: {
                    padding: new Dimensions(20, 40)
                }
            }
        };
    }
}

// Class converting css-style dimensions (padding etc.) to an object
class Dimensions {
    // e.g. padding: 0 5px;
    constructor(top, right, bottom = top, left = right) {
        // String values given
        if (typeof top === "string") {
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.left = left;
        } else {
            // Numeric values given
            this.top = `${top}px`
            this.right = `${right}px`
            this.bottom = `${bottom}px`
            this.left = `${left}px`
        }

    }

    toString() {
        return `${this.top} ${this.right} ${this.bottom} ${this.left}`
    }
}
export default Theme