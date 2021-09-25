<#macro commentm post,type>
    <div id="haloComment"></div>
    <script>
        if (!$('#haloComment')) {
            $('#' + '${post.id?c}').remove();
            $('#comments').append('<div id="haloComment"></div>');
        }
        new Vue({
            el: '#haloComment',
            template: `<halo-comment id="${post.id?c}" type="${type}" />`
        });
    </script>
</#macro>