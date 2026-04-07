import React from 'react'

function HomePage() {
    const logged_in=false;
    if (logged_in) {
        return(<button>Log Out</button>)
    } else {
        return(<button>Log In</button>)
    }
}

//return logged_in?<button>Log Out</button>:<button>Log In</button> 

export default HomePage
