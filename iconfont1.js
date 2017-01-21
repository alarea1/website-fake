;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icongames" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M364.186061 429.659667c0-45.947472-37.522082-83.328847-83.639266-83.328847-46.11923 0-83.639266 37.380352-83.639266 83.328847 0 45.942355 37.520036 83.328847 83.639266 83.328847C326.663979 512.988514 364.186061 475.602022 364.186061 429.659667zM280.546796 475.191676c-25.198924 0-45.705797-20.427238-45.705797-45.532009s20.506873-45.538149 45.705797-45.538149c25.196878 0 45.701704 20.433378 45.701704 45.538149S305.743673 475.191676 280.546796 475.191676z"  ></path>' +
    '' +
    '<path d="M623.473823 473.92687c-46.11923 0-83.638242 37.386492-83.638242 83.333964s37.519012 83.33294 83.638242 83.33294c46.11616 0 83.637219-37.385469 83.637219-83.33294S669.589983 473.92687 623.473823 473.92687zM623.473823 602.792842c-25.198924 0-45.702727-20.427238-45.702727-45.532009s20.503803-45.533033 45.702727-45.533033c25.196878 0 45.701704 20.428262 45.701704 45.533033S648.670701 602.792842 623.473823 602.792842z"  ></path>' +
    '' +
    '<path d="M461.166717 509.087671c-4.87523-17.325597-20.874255-30.074969-39.804149-30.074969l-22.518776 0c-18.933987 0-34.928918 12.749372-39.810289 30.074969-17.398965 4.853541-30.199003 20.805862-30.199003 39.669488l0 22.438035c0 18.86465 12.800038 34.805714 30.199003 39.658232 4.882394 17.331737 20.876302 30.075992 39.810289 30.075992l22.518776 0c18.92887 0 34.928918-12.744255 39.804149-30.075992 17.401012-4.852518 30.199003-20.799722 30.199003-39.658232l0-22.438035C491.36572 529.893532 478.567728 513.942235 461.166717 509.087671zM453.429182 571.195194c0 1.862417-1.526835 3.37998-3.401609 3.37998L424.753944 574.575174l0 25.178449c0 1.862417-1.516602 3.37998-3.390352 3.37998l-22.518776 0c-1.878867 0-3.397516-1.51654-3.397516-3.37998l0-25.178449-25.278745 0c-1.86761 0-3.394446-1.51654-3.394446-3.37998l0-22.438035c0-1.867534 1.526835-3.390213 3.394446-3.390213l25.278745 0 0-25.167193c0-1.874697 1.518649-3.385097 3.397516-3.385097l22.518776 0c1.87375 0 3.390352 1.5104 3.390352 3.385097l0 25.167193 25.273629 0c1.874774 0 3.401609 1.52268 3.401609 3.390213L453.429182 571.195194z"  ></path>' +
    '' +
    '<path d="M732.589341 394.742413c16.356173 0 29.624905-13.217023 29.624905-29.516244 0-16.298198-13.268732-29.516244-29.624905-29.516244-16.359243 0-29.618765 13.218046-29.618765 29.516244C702.970576 381.52539 716.230097 394.742413 732.589341 394.742413z"  ></path>' +
    '' +
    '<path d="M673.7765 451.598328c16.36743 0 29.619788-13.211906 29.619788-29.504988 0-16.304338-13.252358-29.521361-29.619788-29.521361-16.36436 0-29.626952 13.217023-29.626952 29.521361C644.149549 438.386422 657.41214 451.598328 673.7765 451.598328z"  ></path>' +
    '' +
    '<path d="M974.122012 644.082224l-0.487114-5.211698c-3.482454-37.47859-20.716659-96.514147-37.116837-149.33005l-2.516413-8.127098c-6.954674-22.774703-47.647089-132.49257-52.262389-144.92574l-0.183179-0.493234-0.2016-0.488117c-5.050223-12.551874-12.44903-23.907503-21.623346-33.903158l-6.501331-24.752754c-1.16764-4.437056-2.661728-8.354272-4.564133-11.989055-1.347749-2.573615-2.99534-6.180769-3.979801-8.484232-1.495112-6.988158-5.50766-21.901823-20.439332-32.255635-7.484768-5.173836-16.531166-10.824533-44.800134-22.89443-24.155109-10.337439-62.69747-23.366174-91.705296-26.01142-2.605444-0.2415-5.234426-0.357134-7.841917-0.357134-27.999828 0-50.196249 13.419637-62.125418 20.634969l-2.170521 1.301645c-0.508604 0.091074-3.272667 0.210801-5.292757 0.292666-1.998599 0.079818-4.023805 0.171915-6.095061 0.319272-7.273958 0.340761-75.762555 0.508583-116.67806 0.600681-26.76567 0.064468-48.836219 0.119727-54.159676 0.195451-1.469528 0.021489-2.949289 0.031722-4.436214 0.031722-11.267063 0-16.673411-0.726547-18.660753-1.093914-16.14127-8.65717-32.823891-17.087167-46.167327-20.748556-5.102414-1.409093-10.85977-2.102894-17.54428-2.102894-20.559064 0-55.921882 7.336082-75.678641 15.71082-0.609915 0.25071-58.997043 25.37697-70.76043 33.828456-16.946645 12.20088-20.893699 25.647123-24.003654 40.702004-0.264024 1.290389-0.90771 3.857864-2.554277 7.937786l-11.267063 27.819602c-6.360109 6.484691-11.583277 13.96506-16.021538 22.975271-4.405514 8.966209-6.42765 14.94334-8.768047 21.866007-1.5954 4.702092-3.403656 10.04375-6.701907 18.61394-4.59074 11.842723-12.066298 33.638121-19.981896 56.700373-5.728703 16.697287-11.663099 33.990139-16.695925 48.075949-13.057922 36.524868-32.791144 106.146529-40.217581 147.662061-1.804163 10.086729-17.05819 100.07423 1.458271 154.571425 12.466427 36.702923 39.369226 65.682955 77.795948 83.804684 12.43061 5.845125 23.669019 8.683776 34.378357 8.683776 19.085443 0 30.834502-9.052167 35.25946-12.466939l1.736622-1.234107 1.668057-1.500167 24.183763-21.638833c7.220744-6.418176 26.058537-24.849968 47.873249-46.192042 18.921707-18.513656 40.372107-39.498596 53.759547-52.121078 14.471166-13.654998 40.031332-15.236006 57.999278-15.236006 2.398728 0 4.617347 0.021489 6.635389 0.055259l0.970134 0.010233c6.942394 0.064468 31.840454 0.097214 63.520242 0.097214 37.767686 0 85.225455-0.032746 123.222371-0.069585l57.684087-0.026606c27.845303 0 43.795206 10.630105 56.879736 22.115694 13.021082 11.440563 86.793225 85.678358 96.081132 95.359858 0.723507 0.759293 1.453154 1.603521 2.253413 2.503007 8.559284 9.680477 26.373728 29.823236 56.595245 29.823236 8.381221 0 16.866824-1.641383 25.245998-4.886287 29.441726-11.370978 50.74988-22.070668 77.449033-65.35038C983.893964 748.193397 978.474312 690.468694 974.122012 644.082224zM222.063474 255.228939c5.286616-3.803629 46.053736-22.342868 63.441444-29.720905 14.608295-6.182816 44.73464-12.730952 61.066253-12.730952 3.115072 0 5.73382 0.23843 7.64134 0.763386 11.901539 3.266393 32.821844 14.666024 40.311729 18.685571 6.648693 3.576455 20.825134 4.498454 34.420314 4.498454 1.682384 0 3.346348-0.01228 4.997009-0.044002 14.980793-0.223081 163.416416-0.223081 172.888526-0.884137 9.47211-0.665149 17.835935 0.223081 27.979361-5.812379 9.395359-5.597485 26.018626-16.644075 45.091789-16.644075 1.463388 0 2.948266 0.065492 4.438261 0.200568 20.930539 1.911536 53.752384 11.754718 80.393206 23.155373 26.654125 11.382235 33.272118 15.844873 38.114601 19.205411 4.661351 3.229554 4.455658 8.506744 5.604878 12.082176-19.671821-7.087419-72.61576-24.087605-97.894505-29.883611-6.323268-1.446955-12.695657-2.178619-18.942174-2.178619-33.876916 0-53.642885 20.412912-58.934619 26.719548-16.247698 18.782785-46.734262 53.958936-57.66976 66.355267-5.99375 0.031722-30.936837 0.36225-57.485558 0.720408-26.675616 0.36225-54.990635 0.74292-66.979158 0.850367l-0.665176 0.00614c-0.477904 0-0.909756-0.00614-1.310909-0.016373-0.178063-0.222057-0.357148-0.449231-0.540328-0.671289-2.125494-2.596128-4.474078-5.450129-7.300566-8.559956-5.560874-6.132674-14.26138-16.302291-22.673301-26.134217-10.477038-12.243859-21.304061-24.911366-28.897304-33.123398-15.482234-16.756639-33.438923-24.911366-54.861693-24.911366-2.493899 0-4.945841 0.098237-7.370153 0.217964l-1.440874 0.069585c-15.152716 0.649799-51.39766 8.620331-75.350146 17.909905-10.493412 4.079922-24.621756 10.135848-36.500781 15.337313C215.819003 260.527618 217.072605 258.826883 222.063474 255.228939zM924.41083 772.074294c-21.357275 34.611286-35.663682 40.865733-58.814887 49.809429-4.264292 1.65264-8.160178 2.357697-11.721429 2.357697-15.727837 0-25.014722-13.760398-31.656251-20.673855-8.139711-8.489348-83.70476-84.676541-98.447113-97.636714-14.763843-12.960173-39.63325-31.496341-81.706161-31.496341-28.045879 0-117.953152 0.103354-180.906459 0.103354-31.478188 0-56.221723-0.026606-63.124206-0.103354-2.394635-0.022513-5.07683-0.059352-8.002582-0.059352-22.417464 0-58.894708 2.013867-83.823468 25.526373-28.200404 26.594705-88.088783 86.2422-100.880635 97.629551-12.751941 11.388375-24.22265 21.665439-24.22265 21.665439-2.748713 1.956561-6.176929 5.564739-13.553223 5.564739-4.455658 0-10.340933-1.315972-18.381379-5.103228-21.359322-10.067286-46.689235-28.376281-57.922527-61.447491-11.238409-33.06814-7.263725-94.505397 0-135.158283 7.272935-40.654932 26.649009-108.12458 38.552594-141.40966 11.901539-33.285081 28.776549-84.34192 36.341139-103.887069 8.359731-21.675672 8.317774-25.576515 14.092527-37.306674 5.549617-11.290137 12.105185-17.878183 25.757672-24.357757 0 0 37.008362-16.751522 57.701484-24.800849 20.704379-8.02886 53.080044-14.963807 63.447584-15.401782 2.349607-0.10847 4.724798-0.255827 7.14297-0.255827 8.234882 0 17.000882 1.723248 27.20264 12.765745 13.217564 14.290471 38.53929 44.900629 51.322955 58.975183 12.582065 13.879102 13.61974 21.681812 37.070786 21.681812 0.335658 0 0.676433 0 1.011068-0.011256 24.45188-0.222057 116.743554-1.560542 124.895546-1.560542 1.211644 0 2.394635 0.016373 3.560228 0.016373 6.734654 0 13.011871-0.653893 20.884489-9.4093 9.243904-10.260691 61.220778-70.363558 61.220778-70.363558s10.520019-13.322423 30.162163-13.322423c3.276761 0 6.807312 0.367367 10.583466 1.228991 26.432059 6.057973 87.434864 25.944905 97.791147 30.193673 10.34298 4.241604 35.01795 16.311501 46.249195 44.224224 0 0 44.71008 120.42165 51.529672 142.758378 6.828802 22.347984 34.133777 107.014292 38.098227 149.672858C939.828593 685.165922 945.781409 737.440495 924.41083 772.074294z"  ></path>' +
    '' +
    '<path d="M789.664536 392.57198c-16.36129 0-29.631045 13.217023-29.631045 29.521361 0 16.293081 13.269755 29.504988 29.631045 29.504988 16.362313 0 29.633092-13.211906 29.633092-29.504988C819.297627 405.789003 806.026849 392.57198 789.664536 392.57198z"  ></path>' +
    '' +
    '<path d="M732.589341 451.598328c-16.359243 0-29.618765 13.218046-29.618765 29.517267 0 16.303314 13.259522 29.521361 29.618765 29.521361 16.356173 0 29.624905-13.218046 29.624905-29.521361C762.215269 464.816374 748.946537 451.598328 732.589341 451.598328z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-news" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M65.595462 487.551168l0 157.603481 767.361969 0 125.447107 0-0.452301-157.603481L65.595462 487.551168zM65.595462 688.434362l1.795902 127.243009c0 66.071811 54.003961 119.638821 120.756271 119.638821L624.926444 935.316192 624.926444 829.294506c0-40.839127 7.148817-113.848954 56.724932-140.860145L65.595462 688.434362zM956.625008 688.434362 775.379061 688.434362c-54.66911 2.022053-87.711667 82.131579-97.303116 152.021346l0 96.413863L956.625008 688.434362zM187.031209 87.13043c-66.75231 0-120.984469 53.569056-120.984469 119.639844L66.04674 442.910459l891.030569 0L957.07731 206.770274c0-66.070788-54.021358-119.639844-120.755248-119.639844L187.031209 87.13043zM828.285015 185.565323c39.513946 2.232854 60.056817 20.541849 62.272275 55.574736l-37.491892 0c-0.8913-18.082844-10.515494-27.220968-29.472242-27.220968-19.180851 1.343601-29.015847 9.138124-29.696346 23.435759 0 11.597129 9.592472 19.635199 28.580942 24.326035 2.003634 0.680499 3.557012 0.889253 5.127787 0.889253 0.452301 0 2.003634 0.452301 4.708232 1.115404 42.390459 8.493441 63.384609 25.006534 62.931285 49.558719-0.451278 37.944194-26.575262 57.126069-77.665871 58.468646-47.344285 0-70.536496-19.86135-69.89079-59.375296l39.529295 0c0 20.996197 9.819646 32.155351 30.361495 33.044604 23.642466-0.452301 35.713386-8.246825 36.357046-23.435759 0-12.04943-11.386328-20.524452-34.352389-25.00551-3.365654-0.663102-5.580089-1.343601-6.922666-2.231831-39.931454-8.703219-59.811224-25.441439-59.811224-49.542346C754.626411 208.339002 779.841699 188.250478 828.285015 185.565323zM530.29211 189.576683l27.465538 135.26573 35.483142-135.26573 44.414559 0 31.493272 135.26573 1.098008 0 29.243021-135.26573 36.619012 0-46.211485 180.357717-43.297109 0-32.608675-137.495514-35.486212 137.495514-44.188408 0-44.411489-180.357717L530.29211 189.576683zM475.833801 369.9344 350.631264 369.9344l0-180.357717 121.854279 0 0 30.131251-82.567507 0 0 41.973974 76.987419 0 0 30.131251-76.987419 0 0 47.988967 85.915765 0L475.833801 369.9344zM315.372226 189.576683l0 180.357717-56.010665 0-70.77902-150.226466-0.889253 0.907673 0 149.318794-36.391838 0 0-180.357717 57.840336 0 69.176522 142.414547 0.644683-1.11745L278.962991 189.576683 315.372226 189.576683z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-movie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M583.02666 137.51598c-188.995445 0-345.19188 140.008754-370.739742 321.958736-25.211195-52.745295-60.157101-95.864348-118.975718-104.623849-12.69309-1.834788-24.663726 6.916527-26.567076 19.687388-1.89414 12.768815 6.918573 24.663726 19.687388 26.565029 64.640206 9.619078 91.960435 91.191932 118.382201 170.077583 11.453866 34.192753 22.282492 66.466808 36.225039 93.376691 58.421574 130.754996 189.505052 221.924415 341.987908 221.924415 206.833719 0 374.485043-167.649278 374.485043-374.475833C957.511703 305.173444 789.861402 137.51598 583.02666 137.51598zM390.598023 586.814939c-41.939181 0-75.909877-34.002418-75.909877-75.918064 0-41.916668 33.971719-75.918064 75.909877-75.918064 41.924855 0 75.92625 34.001395 75.92625 75.918064C466.524273 552.811498 432.522877 586.814939 390.598023 586.814939zM583.02666 779.23539c-41.923832 0-75.9109-33.987069-75.9109-75.909877 0-41.933041 33.987069-75.92625 75.9109-75.92625 41.924855 0 75.909877 33.993209 75.909877 75.92625C658.93756 745.248322 624.951515 779.23539 583.02666 779.23539zM528.97358 514.085498c0-29.847795 24.183795-54.031591 54.023404-54.031591 29.822213 0 54.039777 24.183795 54.039777 54.031591 0 29.838585-24.216541 54.023404-54.039777 54.023404C553.157375 568.108902 528.97358 543.92306 528.97358 514.085498zM583.02666 394.386302c-41.923832 0-75.9109-33.978882-75.9109-75.909877s33.987069-75.92625 75.9109-75.92625c41.924855 0 75.909877 33.995255 75.909877 75.92625S624.951515 394.386302 583.02666 394.386302zM775.447111 586.814939c-41.930995 0-75.92625-34.002418-75.92625-75.918064 0-41.916668 33.995255-75.918064 75.92625-75.918064 41.909505 0 75.909877 34.001395 75.909877 75.918064C851.358011 552.811498 817.356616 586.814939 775.447111 586.814939z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-video" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M585.142857 146.285714 146.285714 146.285714C65.536 146.285714 0 211.821714 0 292.571429l0 438.857143c0 80.749714 65.536 146.285714 146.285714 146.285714l438.857143 0c80.749714 0 146.285714-65.536 146.285714-146.285714L731.428571 512 731.428571 292.571429C731.428571 211.821714 665.892571 146.285714 585.142857 146.285714zM731.428571 512l292.571429 292.571429L1024 219.428571 731.428571 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tv" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M981.169338 288.118996c-88.797225-12.767601-183.386269-22.015312-282.071185-27.231149l164.890847-164.890847-63.998-63.998-224.536983 224.536983c-20.991344-0.351989-42.142683-0.543983-63.454017-0.543983l0 0-255.992-255.992-63.998 63.998 194.201931 194.201931c-120.924221 4.255867-236.344614 14.527546-343.381269 29.919065-27.51914 107.708634-42.814662 226.744914-42.814662 351.893003s15.263523 244.15237 42.814662 351.893003c143.643511 20.639355 302.326552 32.094997 469.169338 32.094997s325.525827-11.455642 469.169338-32.094997c27.51914-107.708634 42.814662-226.744914 42.814662-351.893003s-15.263523-244.15237-42.814662-351.893003zM863.893003 874.596669c-107.740633 13.75957-226.744914 21.407331-351.893003 21.407331s-244.15237-7.647761-351.893003-21.407331c-20.639355-71.805756-32.094997-151.163276-32.094997-234.584669s11.455642-162.778913 32.094997-234.584669c107.708634-13.75957 226.744914-21.407331 351.893003-21.407331s244.15237 7.647761 351.861004 21.407331c20.639355 71.805756 32.126996 151.163276 32.126996 234.584669s-11.455642 162.778913-32.094997 234.584669z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconevents" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M951.43 169.084h-865.486v772.756h865.486v-772.756zM951.43 1003.661h-865.486c-34.141 0-61.822-27.68-61.822-61.82v-772.756c0-34.141 27.68-61.822 61.822-61.822h865.486c34.141 0 61.822 27.68 61.822 61.822v772.756c0 34.141-27.68 61.82-61.822 61.82v0z"  ></path>' +
    '' +
    '<path d="M394.832 200.217c0 17.077-13.832 30.91-30.91 30.91-17.077 0-30.91-13.832-30.91-30.91v-154.551c0-17.077 13.832-30.91 30.91-30.91 17.077 0 30.91 13.832 30.91 30.91v154.551z"  ></path>' +
    '' +
    '<path d="M703.933 200.217c0 17.077-13.832 30.91-30.91 30.91-17.077 0-30.91-13.832-30.91-30.91v-154.551c0-17.077 13.832-30.91 30.91-30.91 17.077 0 30.91 13.832 30.91 30.91v154.551z"  ></path>' +
    '' +
    '<path d="M735.057 385.453h61.822c17.077 0 30.91 13.832 30.91 30.91v61.822c0 17.077-13.832 30.91-30.91 30.91h-61.822c-17.062 0-30.91-13.832-30.91-30.91v-61.822c0-17.077 13.847-30.91 30.91-30.91z"  ></path>' +
    '' +
    '<path d="M735.057 632.737h61.822c17.077 0 30.91 13.832 30.91 30.91v61.822c0 17.077-13.832 30.91-30.91 30.91h-61.822c-17.062 0-30.91-13.832-30.91-30.91v-61.822c0-17.077 13.847-30.91 30.91-30.91z"  ></path>' +
    '' +
    '<path d="M487.776 632.737h61.82c17.077 0 30.91 13.832 30.91 30.91v61.822c0 17.077-13.832 30.91-30.91 30.91h-61.82c-17.077 0-30.91-13.832-30.91-30.91v-61.822c0-17.077 13.832-30.91 30.91-30.91z"  ></path>' +
    '' +
    '<path d="M487.776 385.453h61.82c17.077 0 30.91 13.832 30.91 30.91v61.822c0 17.077-13.832 30.91-30.91 30.91h-61.82c-17.077 0-30.91-13.832-30.91-30.91v-61.822c0-17.077 13.832-30.91 30.91-30.91z"  ></path>' +
    '' +
    '<path d="M240.495 385.453h61.822c17.077 0 30.91 13.832 30.91 30.91v61.822c0 17.077-13.832 30.91-30.91 30.91h-61.822c-17.077 0-30.91-13.832-30.91-30.91v-61.822c0-17.077 13.832-30.91 30.91-30.91z"  ></path>' +
    '' +
    '<path d="M240.495 632.737h61.822c17.077 0 30.91 13.832 30.91 30.91v61.822c0 17.077-13.832 30.91-30.91 30.91h-61.822c-17.077 0-30.91-13.832-30.91-30.91v-61.822c0-17.077 13.832-30.91 30.91-30.91z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)