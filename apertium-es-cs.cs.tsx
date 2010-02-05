<?xml version="1.0" encoding="UTF-8"?>
<tagger name="czech">
<tagset>
  <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label> 
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label> 
  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label> 
  <def-label name="IJ">
    <tags-item tags="ij"/>
  </def-label> 
  <def-label name="ADV">
    <tags-item tags="adv"/>
    <tags-item tags="adv.sint"/>
    <tags-item tags="adv.sint.comp"/>
    <tags-item tags="adv.sint.sup"/>
  </def-label> 
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="PO" closed="true">
    <tags-item lemma="po" tags="pr"/>
  </def-label> 
  <def-label name="PRCASELESS" closed="true">
    <tags-item lemma="ako" tags="pr"/>
  </def-label> 
  <def-label name="GENPR" closed="true">
    <tags-item lemma="do" tags="pr"/>
    <tags-item lemma="od" tags="pr"/>
    <tags-item lemma="mimo" tags="pr"/>
    <tags-item lemma="z" tags="pr"/>
    <tags-item lemma="bez" tags="pr"/>
    <tags-item lemma="kolem" tags="pr"/>
    <tags-item lemma="okolo" tags="pr"/>
    <tags-item lemma="vedle" tags="pr"/>
    <tags-item lemma="místo" tags="pr"/>
    <tags-item lemma="krome" tags="pr"/>
  </def-label> 
  <def-label name="DATPR" closed="true">
    <tags-item lemma="k" tags="pr"/>
    <tags-item lemma="proti" tags="pr"/>
    <tags-item lemma="kvuli" tags="pr"/>
    <tags-item lemma="vuci" tags="pr"/>
    <tags-item lemma="díky" tags="pr"/>
  </def-label> 
  <def-label name="ACCPR" closed="true">
    <tags-item lemma="pro" tags="pr"/>
    <tags-item lemma="přes" tags="pr"/>
    <tags-item lemma="po" tags="pr"/>
    <tags-item lemma="pod" tags="pr"/>
    <tags-item lemma="pred" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
    <tags-item lemma="v" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="nad" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
    <tags-item lemma="mezi" tags="pr"/>
  </def-label> 
  <def-label name="LOCPR" closed="true">
    <tags-item lemma="v" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
    <tags-item lemma="po" tags="pr"/>
    <tags-item lemma="pri" tags="pr"/>
  </def-label> 
  <def-label name="INSPR" closed="true">
    <tags-item lemma="s" tags="pr"/>
    <tags-item lemma="nad" tags="pr"/>
    <tags-item lemma="pod" tags="pr"/>
    <tags-item lemma="pred" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
  </def-label> 
  <def-label name="P3DETPOS" closed="true">
    <tags-item lemma="jeho" tags="det.pos.adv"/>
    <tags-item lemma="ich" tags="det.pos.adv"/>
  </def-label> 

  <def-label name="PRPERS" closed="true">
    <tags-item lemma="prpers" tags="prn.*"/>
  </def-label> 

  <def-label name="P3PRNNONPR" closed="true">
    <tags-item lemma="prpers" tags="prn.emph.p3.m.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.nt.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.m.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.nt.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.ma.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.ma.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mf.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mf.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.f.sg.dat"/>
  </def-label> 

  <def-label name="ADJPO" closed="true">
    <tags-item tags="adj.po"/>
  </def-label> 

  <def-label name="NE" closed="true">
    <tags-item lemma="ne" tags="adv"/>
  </def-label> 
<!--
  <def-label name="SERFUT" closed="true">
    <tags-item lemma="byť" tags="vbser.fut.*"/>
  </def-label> 
-->
  <def-label name="VBLEXPERF" closed="true">
    <tags-item tags="vblex.perf.*"/>
  </def-label> 

  <def-mult name="PRNEHOEMPHNT" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.emph.p3.nt.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRNEHOEMPHM" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.emph.p3.m.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRNEHONT" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.p3.nt.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRNEHOM" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.p3.m.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="NESERFUT" closed="true">  
    <sequence>
      <label-item label="NE"/>
      <label-item label="SERFUT"/>
    </sequence>
  </def-mult>
</tagset>

<forbid>
  <label-sequence>
    <label-item label="PR"/>
    <label-item label="P3PRNNONPR"/>
  </label-sequence>
  <label-sequence>
    <label-item label="SERFUT"/>
    <label-item label="VBLEXPERF"/>
  </label-sequence>
  <label-sequence>
    <label-item label="NESERFUT"/>
    <label-item label="VBLEXPERF"/>
  </label-sequence>
</forbid>

<enforce-rules>
  <enforce-after label="PR">
    <label-set>
      <label-item label="P3DETPOS"/>
    </label-set>
  </enforce-after>
  <enforce-after label="PO">
    <label-set>
      <label-item label="ADJPO"/>
    </label-set>
  </enforce-after>
</enforce-rules>

<preferences>
  <prefer tags="prn.emph.p3.nt.sg.gen"/>
  <prefer tags="prn.emph.p3.nt.sg.dat"/>
  <prefer tags="prn.emph.p3.nt.sg.acc"/>
  <prefer tags="prn.emph.p3.nt.sg.ins"/>
  <prefer tags="prn.emph.p3.nt.sg.loc"/>
  <prefer tags="prn.emph.p3.ma.pl.gen"/>
  <prefer tags="prn.emph.p3.ma.pl.dat"/>
  <prefer tags="prn.emph.p3.ma.pl.acc"/>
  <prefer tags="prn.emph.p3.ma.pl.ins"/>
  <prefer tags="prn.emph.p3.ma.pl.loc"/>
</preferences>
</tagger>
