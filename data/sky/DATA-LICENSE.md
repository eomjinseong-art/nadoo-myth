# 별자리 성도 데이터

성도의 별과 별자리 선은 런타임에 받아 오지 않고, 이 폴더의 JSON으로 빌드할 때 그립니다.

## 별의 위치·밝기·색

- XHIP: An Extended Hipparcos Compilation, Anderson E. & Francis C. (2012). VizieR V/137D.
- 좌표는 J2000이고, Olaf Frohn의 [d3-celestial](https://github.com/ofrohn/d3-celestial) `data/stars.6.json`(6등까지)을 골랐습니다.
- 미라(ο Cet, HIP 10826)는 밝을 때가 아니면 6등 목록에 없어, J2000 위치와 대표 밝기(약 3.4등)를 따로 넣었습니다. 실제로는 약 2등에서 10등 사이를 오갑니다.

## 별자리 선

- d3-celestial `data/constellations.lines.json`.
- 국제천문연맹(IAU) 88개 별자리의 막대 도형에 바탕하고, 선의 배치는 Olaf Frohn이 정리했습니다.

## 별 이름

- 바이어 기호와 고유 이름은 d3-celestial `data/starnames.json`을 대조했습니다. 이 목록은 HD–HIP 교차 목록 등을 따릅니다.
- 한국어 이름은 같은 파일의 Stellarium 하늘문화 번역을 바탕으로 했고, 널리 쓰는 한글 표기가 다른 밝은 별(셰아트, 셰다르, 페크다, 알리오트, 알헤나, 테자트, 레사트, 주바, 에라이, 코르네포로스)은 그 표기로 적었습니다.
- 라틴·아랍 이름은 국제천문연맹 별 이름 작업반이 정한 이름을 우선했습니다. 카시오페이아 γ의 ‘Navi’는 우주인들의 별칭이라 성도에는 적지 않았습니다.
- 석류별(μ Cep)은 허셜이 붙인 별명입니다.

## 라이선스

d3-celestial의 코드와 함께 배포된 위 데이터 파일은 BSD-3-Clause입니다.

Copyright (c) 2015, Olaf Frohn. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

그림 실루엣(말, 공주, 사냥꾼 등)은 이 사이트를 위해 직접 그린 선화이며 외부 이미지를 쓰지 않았습니다.
