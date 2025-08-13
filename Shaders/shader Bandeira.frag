#version 330 core
out vec4 FragColor;
uniform float iTime;
uniform vec2 iResolution;

void main()
{
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    FragColor = vec4( 0.9,0.9,0,0);
    
    if (uv.y > 0.33)
    {
    FragColor = vec4(0.9, 0, 0, 0);
    }
    if (uv.y > 0.66)
    {
     FragColor = vec4(0, 0, 0, 0);
    }
}
