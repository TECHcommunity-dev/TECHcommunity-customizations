import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    
    setupComponent(args, component) {

        if (component.isView) {
            withPluginApi("0.8.9", (api) => {

                api.onPageChange((url, title) => {
                    if (url.indexOf("/c/webmethods-cloudstreams-connectors/") > -1){
                        // on page change, check if url matches
                        // if your homepage isn't /latest change this to /categories
                        
                        $('html').addClass('connectors-foot-note'); // add a class to the HTML tag for easy CSS targetting

                        component.set('displayfootNoteTopics', true); // we'll use this later to show our template

                    } 
                    else {
                        // If the page doesn't match the urls above, do this:

                        $('html').removeClass('connectors-foot-note'); // Remove our custom class

                        component.set('displayfootNoteTopics', false); // Don't display our customization
                    }
                });
            });
        }
    }
}